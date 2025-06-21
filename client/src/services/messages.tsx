import { ErrorResponse } from "../types/ErrorResponse";
import { Message } from "../types/Message";
import { MessageRequestDTO } from "../types/MessageRequestDTO";
import { ResponseDTO } from "../types/ResponseDTO";

const BASE_URL = process.env.REACT_APP_BASE_URL + "api/messages";

export const getMessages = async (
  page: number
): Promise<ResponseDTO<Message>> => {
  console.log(BASE_URL);
  const response = await fetch(`${BASE_URL}?page=${page || 1}`);
  const data = await response.json();
  const messages: Message[] = data.data.data.map((msg: any) => ({
    ...msg,
    createdAt: new Date(msg.createdAt),
  }));

  return {
    data: messages,
    status: data.status,
    totalPages: data.totalPages,
    page: data.page,
  };
};

export const postMessage = async (
  requsetBody: MessageRequestDTO
): Promise<Message | ErrorResponse> => {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requsetBody),
  });
  const data = await response.json();
  if (data.status !== "success") {
    throw data;
  }
  return data;
};
