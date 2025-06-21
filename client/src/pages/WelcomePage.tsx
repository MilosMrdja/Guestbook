import MessageCard from "../components/MessageCard";
import { useNavigate } from "react-router-dom";
import "../css/WelcomePage.css";
import { getMessages } from "../services/messages";
import { useEffect, useState } from "react";
import { Message } from "../types/Message";

function WelcomePage() {
  const navigate = useNavigate();

  const openLeaveMessage = () => {
    navigate("/leave-message");
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1); // currentPage < totalPages && setCurrentPage
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);
      setError(null);
      try {
        const resMessages = await getMessages(currentPage);
        setMessages(resMessages.data);
        setTotalPages(resMessages.totalPages);
      } catch (err) {
        setError("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };
    loadMessages();
  }, [currentPage]);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className="guestbook-page">
        <h1>Guestbook</h1>
        <h3>
          See what people wrote about us and feel free to leave a message.
        </h3>

        <div className="messages-list">
          {messages.map((m) => (
            <MessageCard message={m} key={m.id} />
          ))}
        </div>

        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            ←
          </button>
          <div className="page-info">
            Page {currentPage} / {totalPages}
          </div>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            →
          </button>
        </div>

        <button onClick={openLeaveMessage}>Leave a message</button>
      </div>
    </>
  );
}

export default WelcomePage;
