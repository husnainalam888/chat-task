import { useState } from "react";
import { Input, Button, Row, Col } from "antd";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <Row gutter={8} style={{ marginTop: 10 }}>
      <Col span={20}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={handleSend}>
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default ChatInput;
