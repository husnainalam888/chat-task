import { Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
const ChatMessage = ({ message }) => {
  return (
    <Comment
      avatar={<Avatar>{message.sender[0]}</Avatar>}
      author={<b>{message.sender}</b>}
      content={<p>{message.text}</p>}
      datetime={new Date(message.timestamp).toLocaleTimeString()}
    />
  );
};

export default ChatMessage;
