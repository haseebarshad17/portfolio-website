const Fallback = () => {
  return (
    <div
      className="bg-deep-gray w-full h-screen flex items-center justify-center 
      z-full fixed top-0 bottom-0 left-0 right-0 pointer-events-auto"
    >
      <p className="font-syne-16-300 text-white animate-pulse">loading...</p>
    </div>
  );
};

export default Fallback;
