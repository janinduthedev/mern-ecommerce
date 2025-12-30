import { Truck, ShieldCheck, Award, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your gear within 24 hours. Lightning fast shipping nationwide.",
      icon: <Truck className="text-green-500" size={32} />,
    },
    {
      title: "Secure Payment",
      desc: "AES-256 encrypted transactions. Your data is always protected.",
      icon: <ShieldCheck className="text-blue-500" size={32} />,
    },
    {
      title: "Best Quality",
      desc: "Genuine brands and certified gaming hardware with full warranty.",
      icon: <Award className="text-purple-500" size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
            Why <span className="text-green-500">Choose</span> Us
          </h2>
          <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 p-10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <Zap size={20} className="text-green-500" />
              </div>

              <div className="mb-6 inline-block p-4 bg-black/40 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>

              <h3 className="text-xl text-white font-bold mb-3 group-hover:text-green-400 transition-colors">
                {f.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
