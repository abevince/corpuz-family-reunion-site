export default function DevBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-400/95 backdrop-blur-sm text-[#0d0a1a] text-center py-2 px-4">
      <p className="text-xs sm:text-sm font-semibold tracking-wide">
        🚧 This site is under development — event details are not yet final. Stay tuned for updates!
      </p>
    </div>
  );
}
