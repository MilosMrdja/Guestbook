import React from "react";
import { Message } from "../types/Message";
import '../css/MessageCard.css'

interface MessageCardProps {
  message: Message;
}

function MessageCard({message}:MessageCardProps) {
  const { content, userName, createdAt } = message;

  return (
    <div className="wrapper">
    <div className="message-card">
      <div className="message-header">
        <strong className="message-username">{userName}</strong>
        <span className="message-date">{formatDate(new Date(createdAt))}</span>
      </div>
      <p className="message-content">{content}</p>
    </div>
    </div>

  );
}

function formatDate(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1); // getMonth() vraća 0-11
  const year = date.getFullYear();

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}


export default MessageCard;