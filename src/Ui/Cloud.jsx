export default function Cloud() {
    return (
      <div className="relative w-[90%] max-w-[500px] h-[260px] sm:h-[340px] flex flex-col items-center justify-center blur-[12px] z-0 space-y-[-30px] sm:space-y-[-50px] mx-auto">
        
        {/* Top Row */}
        <div className="flex justify-center space-x-[-30px] sm:space-x-[-50px]">
          <div className="w-[100px] sm:w-[180px] h-[80px] sm:h-[150px] rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-300 to-violet-300" />
        </div>
  
        {/* Center (Main Cloud Body) */}
        <div className="w-[160px] sm:w-[320px] h-[160px] sm:h-[240px] rounded-full bg-gradient-to-br from-fuchsia-300 via-violet-500 to-fuchsia-200 z-[1]" />
        <div className="w-[140px] sm:w-[320px] h-[160px] sm:h-[240px] rounded-full bg-gradient-to-br from-fuchsia-300 via-violet-500 to-fuchsia-200 z-[1]" />
        
        {/* Bottom Row */}
        <div className="flex justify-center space-x-[-20px] sm:space-x-[-50px] -mt-6 sm:-mt-12">
          <div className="w-[200px] sm:w-[180px] h-[210px] sm:h-[200px] rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-300 to-pink-200" />
          <div className="w-[200px] sm:w-[180px] h-[210px] sm:h-[200px] rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-300 to-pink-200" />
          <div className="w-[200px] sm:w-[180px] h-[210px] sm:h-[200px] rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-300 to-pink-200" />
        </div>
      </div>
    );
  }
  