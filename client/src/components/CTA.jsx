import { useNavigate } from "react-router-dom";
import { UserPlus, ArrowRight } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(34,197,94,0.3)] overflow-hidden relative">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase italic">
              Ready to Join the <br /> Elite League?
            </h2>

            <p className="text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Create an account today and unlock exclusive pro-gamer deals,
              early drops, and community rewards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/register")}
                className="group flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-900 transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <UserPlus size={24} />
                GET STARTED
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>

            <p className="mt-6 text-black/60 text-sm font-bold uppercase tracking-widest">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
