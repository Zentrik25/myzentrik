import { Sk } from '@/components/Sk'

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#000000', paddingTop: '96px', paddingBottom: '56px' }}>
        <div className="mx-auto max-w-[740px] px-5 text-center">
          <div className="flex justify-center mb-4"><Sk dark w="80px" h="12px" /></div>
          <div className="flex flex-col items-center gap-3 mb-6">
            <Sk dark w="500px" h="52px" r="8px" />
          </div>
          <Sk dark w="480px" h="20px" className="mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Sk w="80px" h="12px" className="mb-4" />
              <Sk w="300px" h="40px" r="8px" className="mb-6" />
              <div className="space-y-3">
                <Sk h="15px" /><Sk h="15px" w="92%" /><Sk h="15px" w="80%" />
                <Sk h="15px" className="mt-2" /><Sk h="15px" w="88%" /><Sk h="15px" w="70%" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg p-6 flex flex-col items-center gap-2" style={{ background: '#f5f5f7' }}>
                  <Sk w="70px" h="40px" r="6px" />
                  <Sk w="100px" h="12px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#f5f5f7', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="80px" h="12px" />
            <Sk w="240px" h="36px" r="8px" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg p-8 flex flex-col items-center gap-3" style={{ background: '#ffffff' }}>
                <Sk w="56px" h="56px" r="14px" />
                <Sk w="120px" h="20px" r="6px" />
                <Sk h="13px" /><Sk h="13px" w="80%" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="mx-auto max-w-[980px] px-5">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Sk w="240px" h="30px" r="8px" />
            <Sk w="200px" h="16px" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[80, 70, 90, 60, 80, 100, 70, 110, 80, 90].map((w, i) => (
              <Sk key={i} w={`${w}px`} h="30px" r="980px" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
