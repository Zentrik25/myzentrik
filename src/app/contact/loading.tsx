import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[640px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="100px" h="12px" /></div>
          <Sk dark w="440px" h="52px" r="8px" className="mx-auto mb-6" />
          <Sk dark w="460px" h="20px" className="mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <Sk w="180px" h="22px" className="mb-6" />
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg p-5" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
                    <Sk w="40px" h="40px" r="10px" />
                    <div className="flex-1">
                      <Sk w="60px" h="11px" className="mb-2" />
                      <Sk w="160px" h="15px" />
                    </div>
                  </div>
                ))}
              </div>
              <Sk w="100%" h="52px" r="980px" className="mt-6" />
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid #d2d2d7' }}>
                <Sk w="200px" h="22px" className="mb-6" />
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Sk w="60px" h="12px" className="mb-2" /><Sk h="46px" r="8px" /></div>
                    <div><Sk w="60px" h="12px" className="mb-2" /><Sk h="46px" r="8px" /></div>
                  </div>
                  <div><Sk w="50px" h="12px" className="mb-2" /><Sk h="46px" r="8px" /></div>
                  <div><Sk w="70px" h="12px" className="mb-2" /><Sk h="46px" r="8px" /></div>
                  <div><Sk w="80px" h="12px" className="mb-2" /><Sk h="120px" r="8px" /></div>
                  <Sk w="160px" h="44px" r="980px" className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
