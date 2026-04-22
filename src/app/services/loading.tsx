import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="100px" h="12px" /></div>
          <div className="flex flex-col items-center gap-3 mb-6">
            <Sk dark w="520px" h="52px" r="8px" />
          </div>
          <Sk dark w="460px" h="20px" className="mx-auto" />
        </div>
      </section>

      {/* 3 alternating service sections */}
      {[true, false, true].map((white, i) => (
        <section key={i} style={{ background: white ? '#ffffff' : '#f5f5f7', padding: '64px 0' }}>
          <div className="mx-auto max-w-[980px] px-5">
            <div className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="rounded-2xl p-8" style={{ background: '#000000' }}>
                  <Sk dark w="56px" h="56px" r="12px" className="mb-6" />
                  <div className="grid grid-cols-2 gap-3">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Sk key={j} dark h="36px" r="8px" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Sk w="80px" h="12px" className="mb-4" />
                <Sk w="280px" h="32px" r="8px" className="mb-4" />
                <div className="space-y-2 mb-8">
                  <Sk h="15px" /><Sk h="15px" w="90%" /><Sk h="15px" w="75%" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Sk w="14px" h="14px" r="50%" />
                      <Sk w="130px" h="12px" />
                    </div>
                  ))}
                </div>
                <Sk w="180px" h="40px" r="980px" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 flex flex-col items-center gap-4">
          <Sk dark w="380px" h="40px" r="8px" />
          <Sk dark w="460px" h="18px" />
          <Sk dark w="160px" h="40px" r="980px" className="mt-4" />
        </div>
      </section>
    </>
  )
}
