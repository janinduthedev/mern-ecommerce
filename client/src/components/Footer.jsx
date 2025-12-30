import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-white tracking-tighter mb-6">
              MY<span className="text-green-500">SHOP</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              The ultimate destination for next-gen gaming gear. Level up your
              setup with the best tech in the industry.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Explore
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Featured Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Gaming PCs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Newsletter
            </h3>
            <p className="text-sm mb-4">Get early access to drops and sales.</p>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 focus-within:border-green-500 transition-colors">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full text-white"
              />
              <button className="bg-green-500 text-black p-2 rounded-lg hover:bg-green-400 transition">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-medium">
          <p>© {new Date().getFullYear()} MYSHOP. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            MADE WITH <span className="text-red-500">❤️</span> BY{" "}
            <span className="text-white font-bold underline underline-offset-4 decoration-green-500">
              MERN STACK
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
