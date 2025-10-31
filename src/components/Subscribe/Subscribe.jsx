export default function Subscribe() {
  return (
    <section className="Subscribe">
      <div className="container">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <div className="w-[15px] h-[90px] bg-[#FFA155FF]"></div>
            <div className="w-[15px] h-[180px] bg-[#FFD3AFFF]"></div>
            <div className="w-[15px] h-[67px] bg-[#444CFCFF]"></div>
          </div>
          <div className="subscribe__inner bg-[#3f47d2e4] p-[100px] flex items-center justify-between mb-[100px]">
            <div className="">
              <h3 className="text-[14px] font-medium mb-2.5 text-white">
                NEWSLETTER
              </h3>
              <h2 className="text-[36px] font-semibold max-w-[488px] text-white">
                Subscribe our News Letter to get Latest Updates.
              </h2>
            </div>
            <input
              type="text"
              placeholder="Paresh@Pixeto.com"
              className="p-[20px_0_20px_30px] outline-none bg-white max-w-[454px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
