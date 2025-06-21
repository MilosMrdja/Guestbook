import { useNavigate } from "react-router-dom";
import "../css/MessagePage.css";
import { useState } from "react";
import { postMessage } from "../services/messages";

function MessagePage() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "failed"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // must contains 1+ character
    if (
      !userName.trim() ||
      !content.trim() ||
      /^\d+$/.test(userName.trim()) ||
      /^\d+$/.test(content.trim())
    ) {
      setStatus("failed");
      return;
    }

    try {
      setStatus("loading");
      await postMessage({ userName, content });

      setStatus("success");
      setDisableSubmitBtn(true);
      setUserName("");
      setContent("");
      setErrorMessage("");
    } catch (err: any) {
      setStatus("failed");
      setErrorMessage(err.message);
    }
  };

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="leave-message-container">
      <h2 className="form-title">Leave a message</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            id="userName"
            type="text"
            required
            className="form-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={disableSubmitBtn}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Message</label>
          <input
            id="content"
            type="text"
            required
            className="form-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={disableSubmitBtn}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={handleReturn}
            className="btn btn-secondary"
          >
            Return
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={disableSubmitBtn}
          >
            Post
          </button>
        </div>

        <div className="form-status">
          {status === "loading" && (
            <span className="status loading">Loading...</span>
          )}
          {status === "success" && (
            <span className="status success">Success!</span>
          )}
          {status === "failed" && (
            <span className="status failed">
              Failed! Fill inputs properly or try again.
            </span>
          )}
          {errorMessage !== "" && (
            <>
              <br />
              <span className="status failed">{errorMessage}</span>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default MessagePage;
