export default function Header() {
  return (
    <header className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
      <div
        className="w-[200px] h-[60px] bg-[#F5F5F5] opacity-90 rounded-[20px] shadow-[6px_6px_3px_rgba(0,0,0,0.15)] flex items-center justify-center"
      >
        <h1 className="text-[20px] sm:text-[24px] font-semibold text-black font-montserrat leading-tight">
          Social.com
        </h1>
      </div>
    </header>
  );
}
