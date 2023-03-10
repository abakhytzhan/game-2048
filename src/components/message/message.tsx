import "./message.css";

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  if (message === "You win!") {
    return <div className="winMessage">{message}</div>;
  } else if (message === "Game over!") {
    return <div className="gameOver">{message}</div>;
  } else {
    return <div className="gameOver2">{message}</div>;
  }
};

export default Message;
