import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Subtle Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 2. Main Glow (Green) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 3. Accent Glow (Purple or Blue) */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Gaming Essentials
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              LEVEL UP YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                EXPERIENCE
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
              Equip yourself with next-gen consoles and pro-grade accessories.
              Engineered for the elite.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button className="group relative bg-green-500 text-black px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button className="border border-white/10 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all">
                VIEW DEALS
              </button>
            </div>

            {/* Stats (Optional but looks cool) */}
            <div className="mt-12 flex justify-center md:justify-start gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">12K+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Products
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">85+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Brands
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">24H</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Delivery
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="relative flex justify-center items-center">
            {/* Background Circle for Image */}
            <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[60%] h-[60%] border border-green-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <img
              src={hero}
              alt="Gaming Console"
              className="relative w-full max-w-sm md:max-w-md lg:max-w-lg 
                         drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)]
                         animate-float z-10"
            />

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 bg-black/80 backdrop-blur-lg border border-white/10 p-4 rounded-2xl hidden lg:block animate-bounce shadow-2xl">
              <p className="text-green-500 font-bold text-xl">20% OFF</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
                Limited Time Offer
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
