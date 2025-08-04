const BackgroundMotion = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 🌊 Layer 1 - Medium Purple Gradient with blur and blend */}
      <div
        className="absolute w-[300%] h-full top-0 left-0 animate-waveSlow opacity-40 blur-md mix-blend-multiply bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-300 "
        style={{
          clipPath:
            "polygon(0 70%, 10% 73%, 20% 68%, 30% 74%, 40% 71%, 50% 69%, 60% 74%, 70% 72%, 80% 69%, 90% 71%, 100% 70%, 100% 100%, 0% 100%)",
        }}
      />

      {/* 🌊 Layer 2 - Soft Blue Gradient with blur and blend */}
      <div
        className="absolute w-[300%] h-full top-0 left-0 animate-waveFast opacity-30 blur-sm mix-blend-overlay bg-gradient-to-r from-indigo-400 via-blue-200 to-violet-300"
        style={{
          clipPath:
            "polygon(0 74%, 10% 71%, 20% 76%, 30% 73%, 40% 75%, 50% 70%, 60% 77%, 70% 73%, 80% 75%, 90% 72%, 100% 74%, 100% 100%, 0% 100%)",
        }}
      />

      {/* 🎬 Animations */}
      <style>
        {`
          @keyframes waveSlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes waveFast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-waveSlow {
            animation: waveSlow 70s ease-in-out infinite;
          }
          .animate-waveFast {
            animation: waveFast 50s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundMotion;
