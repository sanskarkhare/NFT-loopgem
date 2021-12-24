import React, { useEffect } from "react";

// Stylesheet
import "./WalletPopup.css";

// Popup
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Assets
import wallet from "../../../assets/Wallet.png";
import walletPopup1 from "../../../assets/walletPopup1.png";
import walletPopup3 from "../../../assets/walletPopup3.png";

import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'

import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'


import { useEagerConnect, useInactiveListener } from './hooks'
import {
  injected,
  walletconnect,
} from './connectors'

import { useAppState } from '../../../states/states';

const ConnectorNames = Object.freeze({
  Injected : 'Injected',
  WalletConnect : 'WalletConnect',
})

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
}

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect 
    || error instanceof UserRejectedRequestErrorFrame
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}




     

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span style={{fontWeight:"bold"}}> Account</span>
      <span>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
      </span>
    </>
  )
}

function Balance() {
  
  const { account, library, chainId } = useWeb3React()
  

  const [balance, setBalance] = React.useState()
  React.useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span style={{fontWeight:"bold"}}>Balance</span>
      
      <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
    </>
  )
}

function AccInfoModal() {
  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  

  const { setContract } = useAppState(
    React.useCallback(
      ({ setContract }) => ({
        setContract,
        
      }),
      []
    )
  )
  React.useEffect(() => {
    if (!chainId || !account || !library) return;

    const update = async () => {
      try {
        await setContract(library, chainId)
      } catch (error) {
        console.log(error)
      }
    }

    update()

  },[chainId, account, library])

  return (
    <div className="accinfomodal">
      <Account />
      <Balance />
      {(active || error) && (
          <button
            style={{
              height: '3rem',
              marginTop: '2rem',
              borderRadius: '1rem',
              borderColor: '#0000cc',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: 'black'
            }}
            onClick={() => {
              deactivate()
            }}
          >
            Deactivate
          </button>
        )}
      {/* {!!(library && account) && (
          <button
            style={{
              height: '3rem',
              borderRadius: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => {
              library
                .getSigner(account)
                .signMessage('👋')
                .then((signature) => {
                  window.alert(`Success!\n\n${signature}`)
                })
                .catch((error) => {
                  window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                })
            }}
            >
            Sign Message
          </button>
        )} */}
    </div>
  )
}

function App() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const context = useWeb3React()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState()
  

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
   const triedEager = useEagerConnect()


  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

     useInactiveListener(!triedEager || !!activatingConnector)


  return (
    <div >
          <Button onClick={handleClickOpen}>
          <img src={wallet} alt="wallet" />
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        >
          {
            active ? 
            <AccInfoModal /> :
            <div className="walletmodal">

              <DialogTitle className="popup popup-title" id="responsive-dialog-title">
                {"Wallet"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="popup popup-content">
                  Connect with one of our available wallet
                </DialogContentText>
              </DialogContent>
              <DialogActions className="wallet-options">
                <InjectedBtn />
                <WcBtn />
                

            </DialogActions>
            </div>
          }
        

      </Dialog>
     
    </div>
  )
}

  function InjectedBtn(){

    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState()
    // React.useEffect(() => {
    //   if (activatingConnector && activatingConnector === connector) {
    //     setActivatingConnector(undefined)
    //   }
    // }, [activatingConnector, connector])
  
    const currentConnector = connectorsByName[ConnectorNames.Injected]
     const activating = currentConnector === activatingConnector
     const connected = currentConnector === connector
     const disabled = !!activatingConnector || connected || !!error
    return (
      <>
          <div className="wallet-option wallet-option-1"
            disabled={disabled}
            onClick={() => {
              setActivatingConnector(currentConnector)
              activate(connectorsByName[ConnectorNames.Injected])
            }} 
          >
            {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
            <img src={walletPopup1} alt="wallet" />
            <h4>MetaMask</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
      </div>
      </>
    )

  }

  function WcBtn() {
    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  

        const currentConnector = connectorsByName[ConnectorNames.WalletConnect]

    const [activatingConnector, setActivatingConnector] = React.useState()
   
  

     const activating = currentConnector === activatingConnector
     const connected = currentConnector === connector
     const disabled = !!activatingConnector || connected || !!error


     return (
      <>
          <div className="wallet-option wallet-option-2"
            disabled={disabled}
            onClick={() => {
              setActivatingConnector(currentConnector)
              activate(connectorsByName[ConnectorNames.WalletConnect])
            }} 
          >
            {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
            <img src={walletPopup3} alt="wallet" />
            <h4>WalletConnect</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
       

        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
      </div>
      </>
    )
  }

 

function WalletPopup() {
  

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <App />
      </div>
    </Web3ReactProvider>
   
  );
}

export default WalletPopup;
