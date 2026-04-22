import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="160px" h="12px" /></div>
          <Sk dark w="360px" h="52px" r="8px" className="mx-auto mb-6" />
          <Sk dark w="420px" h="20px" className="mx-auto" />
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-6 lg:grid-cols-3">
            {[false, true, false].map((popular, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8"
                style={{
                  background: popular ? '#000000' : '#ffffff',
                  border: popular ? '2px solid #0071e3' : '1px solid #d2d2d7',
                }}
              >
                <Sk dark={popular} w="120px" h="22px" r="6px" className="mb-2" />
                <Sk dark={popular} h="13px" className="mb-5" />
                <Sk dark={popular} h="13px" w="80%" className="mb-6" />
                <Sk dark={popular} w="140px" h="52px" r="8px" className="mb-6" />
                <Sk dark={popular} h="40px" r="980px" className="mb-8" />
                <div className="space-y-3">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Sk dark={popular} w="16px" h="16px" r="50%" />
                      <Sk dark={popular} w={`${130 + j * 8}px`} h="13px" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="80px" h="12px" />
            <Sk w="240px" h="36px" r="8px" />
            <Sk w="280px" h="16px" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg p-6" style={{ background: '#f5f5f7', border: '1px solid #d2d2d7' }}>
                <Sk w="160px" h="15px" className="mb-2" />
                <Sk h="13px" className="mb-1" />
                <Sk h="13px" w="70%" className="mb-3" />
                <Sk w="80px" h="18px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[640px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="40px" h="12px" />
            <Sk w="260px" h="36px" r="8px" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-lg p-6" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
                <Sk w="220px" h="17px" className="mb-3" />
                <Sk h="13px" className="mb-1" />
                <Sk h="13px" w="88%" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
