const EmojiFooter: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 place-items-center p-4 mb-3 md:mb-0">
      <span role="img" aria-label="Person Walking" className="text-4xl">
        🚶
      </span>
      <span role="img" aria-label="Handshake" className="text-4xl">
        🤝
      </span>
      <span role="img" aria-label="Robot" className="text-4xl">
        🤖
      </span>
    </div>
  );
};

export default EmojiFooter;
