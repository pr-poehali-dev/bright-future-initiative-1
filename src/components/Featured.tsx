export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Природа, которую мы защищаем"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-green-700">Почему это важно сейчас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Леса исчезают, океаны загрязняются, климат меняется. Но у нас ещё есть время — и каждый из нас может стать частью решения, а не проблемы.
        </p>
        <button className="bg-green-700 text-white border border-green-700 px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-green-700 cursor-pointer w-fit uppercase tracking-wide">
          Присоединиться
        </button>
      </div>
    </div>
  );
}