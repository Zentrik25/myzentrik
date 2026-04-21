export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: '#ffffff' }}>
      <div className="relative flex items-center justify-center">
        <div className="relative h-12 w-12">
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
          />
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#0071e3' }}
          />
        </div>
      </div>
      <p
        className="mt-6 text-sm font-semibold"
        style={{ color: '#1d1d1f', letterSpacing: '-0.28px' }}
      >
        Zentrik Solutions
      </p>
      <p className="mt-1 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>Loading...</p>
    </div>
  )
}
