import { Monitor, Smartphone, Headphones, Gamepad2 } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Consoles",
      icon: <Gamepad2 size={40} />,
      color: "from-blue-600/20",
    },
    {
      name: "Components",
      icon: <Monitor size={40} />,
      color: "from-green-600/20",
    },
    {
      name: "Accessories",
      icon: <Headphones size={40} />,
      color: "from-purple-600/20",
    },
    {
      name: "Mobile Gear",
      icon: <Smartphone size={40} />,
      color: "from-red-600/20",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl text-white tracking-tighter uppercase">
              Browse <span className="text-green-500">Gear</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Select a category to find your weapon.
            </p>
          </div>
          <button className="text-green-500 font-bold text-sm hover:underline tracking-widest uppercase">
            View All Categories —
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 text-center cursor-pointer transition-all duration-500 hover:border-green-500/50 hover:-translate-y-3`}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Icon Container */}
              <div className="relative z-10 mb-4 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-black/50 border border-white/5 text-white group-hover:text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {cat.icon}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-xl text-white font-bold tracking-tight group-hover:text-white transition-colors">
                {cat.name}
              </h3>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
