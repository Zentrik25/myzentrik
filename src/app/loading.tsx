import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '80px' }}>
        <div className="mx-auto max-w-[980px] px-5 text-center">
          <div className="flex justify-center mb-5">
            <Sk dark w="280px" h="14px" />
          </div>
          <div className="flex flex-col items-center gap-3 mb-6">
            <Sk dark w="640px" h="52px" r="8px" />
            <Sk dark w="480px" h="52px" r="8px" />
          </div>
          <div className="flex flex-col items-center gap-2 mb-10">
            <Sk dark w="520px" h="20px" />
            <Sk dark w="400px" h="20px" />
          </div>
          <div className="flex justify-center gap-4">
            <Sk dark w="160px" h="40px" r="980px" />
            <Sk dark w="140px" h="40px" r="980px" />
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Sk dark w="70px" h="32px" r="6px" />
                <Sk dark w="100px" h="13px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="80px" h="12px" />
            <Sk w="220px" h="36px" r="8px" />
            <Sk w="380px" h="18px" />
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg p-8" style={{ background: '#f5f5f7' }}>
                <Sk w="48px" h="48px" r="12px" className="mb-4" />
                <Sk w="140px" h="22px" r="6px" className="mb-3" />
                <div className="flex flex-col gap-2 mb-5">
                  <Sk h="14px" />
                  <Sk h="14px" w="85%" />
                  <Sk h="14px" w="70%" />
                </div>
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-2 mb-2">
                    <Sk w="14px" h="14px" r="50%" />
                    <Sk w="120px" h="12px" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk dark w="100px" h="12px" />
            <Sk dark w="220px" h="36px" r="8px" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-lg p-8" style={{ background: '#272729' }}>
                <Sk dark w="44px" h="44px" r="12px" className="mb-4" />
                <Sk dark w="110px" h="18px" className="mb-2" />
                <Sk dark h="13px" className="mb-1" />
                <Sk dark h="13px" w="80%" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="80px" h="12px" />
            <Sk w="200px" h="36px" r="8px" />
            <Sk w="320px" h="18px" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Sk w="48px" h="40px" r="6px" className="mb-4" />
                <Sk w="140px" h="18px" className="mb-2" />
                <Sk h="13px" className="mb-1" />
                <Sk h="13px" w="75%" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
