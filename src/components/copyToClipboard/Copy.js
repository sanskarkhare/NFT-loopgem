import React from "react";

// Stylesheet
import "./Copy.css";

// Material UI Icons
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Copy to clipboard
import { useClipboard } from "use-clipboard-copy";

function Copy({ url }) {
  const clipboard = useClipboard({
    onSuccess() {
      console.log("Text was copied successfully!");
    },
    onError() {
      console.log("Failed to copy text!");
    },
  });

  return (
    <div className="copy-clipboard">
      <input ref={clipboard.target} value={url} readOnly />
      <button onClick={clipboard.copy}>
        <ContentCopyIcon />
      </button>
    </div>
  );
}

export default Copy;
