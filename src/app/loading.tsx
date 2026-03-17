export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05050A]">
      {/* Outer glow ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full bg-violet-600/20 blur-xl animate-pulse" />

        {/* Spinning ring */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/5" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500 border-r-blue-500 animate-spin" />
          {/* Inner dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="mt-6 flex items-center gap-2">
        <span className="text-lg font-black tracking-tight text-white">Zentrik</span>
        <span className="text-lg font-black tracking-tight text-violet-400">Solutions</span>
      </div>
      <p className="mt-1 text-xs text-gray-600 animate-pulse">Loading...</p>
    </div>
  )
}
