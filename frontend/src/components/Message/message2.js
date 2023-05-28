import './message.css';

const Message2 = ({msg, type}) => {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Message2;
