import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="80px" h="12px" /></div>
          <Sk dark w="280px" h="52px" r="8px" className="mx-auto mb-6" />
          <Sk dark w="500px" h="20px" className="mx-auto mb-8" />
          <div className="flex justify-center gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Sk key={i} dark w="120px" h="14px" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="space-y-6">
            {[true, false].map((light, i) => (
              <div
                key={i}
                className="rounded-2xl"
                style={{ background: light ? '#ffffff' : '#000000', padding: '32px' }}
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* Left: info */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <Sk dark={!light} w="48px" h="48px" r="12px" />
                      <div>
                        <Sk dark={!light} w="160px" h="20px" className="mb-1" />
                        <Sk dark={!light} w="100px" h="13px" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <Sk dark={!light} h="15px" />
                      <Sk dark={!light} h="15px" w="90%" />
                      <Sk dark={!light} h="15px" w="75%" />
                    </div>
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="flex items-center gap-2 mb-2">
                        <Sk dark={!light} w="14px" h="14px" r="50%" />
                        <Sk dark={!light} w="200px" h="13px" />
                      </div>
                    ))}
                    <div className="flex gap-2 mt-5 mb-6 flex-wrap">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <Sk key={j} dark={!light} w="80px" h="26px" r="980px" />
                      ))}
                    </div>
                    <Sk dark={!light} w="180px" h="40px" r="980px" />
                  </div>
                  {/* Right: preview */}
                  <Sk dark={!light} h="280px" r="12px" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl p-10 flex flex-col items-center gap-4" style={{ background: '#ffffff', border: '1px dashed #d2d2d7' }}>
            <Sk w="260px" h="22px" />
            <Sk w="380px" h="16px" />
            <Sk w="180px" h="40px" r="980px" className="mt-2" />
          </div>
        </div>
      </section>
    </>
  )
}
