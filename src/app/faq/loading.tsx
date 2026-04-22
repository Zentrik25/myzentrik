import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="50px" h="12px" /></div>
          <Sk dark w="480px" h="52px" r="8px" className="mx-auto mb-6" />
          <Sk dark w="420px" h="20px" className="mx-auto" />
        </div>
      </section>

      {/* FAQ categories */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[740px] px-5">
          <div className="space-y-10">
            {['Services', 'Pricing & Payment', 'Project & Process', 'Working With Us'].map((cat, i) => (
              <div key={cat}>
                {/* Category divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1" style={{ background: '#d2d2d7' }} />
                  <div className="rounded-full px-4 py-1" style={{ background: '#e8e8ed', width: `${80 + i * 20}px`, height: '28px' }} />
                  <div className="h-px flex-1" style={{ background: '#d2d2d7' }} />
                </div>
                <div className="space-y-3">
                  {Array.from({ length: i === 0 ? 4 : i === 1 ? 3 : 3 }).map((_, j) => (
                    <div key={j} className="rounded-lg p-6" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
                      <Sk w="240px" h="17px" className="mb-3" />
                      <Sk h="14px" className="mb-1.5" />
                      <Sk h="14px" w="90%" className="mb-1.5" />
                      <Sk h="14px" w="70%" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000000', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5 flex flex-col items-center gap-4">
          <Sk dark w="300px" h="40px" r="8px" />
          <Sk dark w="400px" h="18px" />
          <div className="flex gap-4 mt-4">
            <Sk dark w="160px" h="44px" r="980px" />
            <Sk dark w="160px" h="44px" r="980px" />
          </div>
        </div>
      </section>
    </>
  )
}
