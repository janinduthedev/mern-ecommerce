import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  Mail,
  LogOut,
  User,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    setUserInfo(user ? JSON.parse(user) : null);
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    setMenuOpen(false);
    navigate("/login");
  };

  // Mobile link click කරාම menu එක close වෙන්න
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-[100] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-green-500"
        >
          MY<span className="text-white">SHOP</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-green-400 transition">
            Products
          </Link>
          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>

          {userInfo ? (
            <div className="flex items-center gap-5 pl-4 border-l border-white/20">
              <span className="flex items-center gap-2 text-gray-300">
                <User size={16} /> {userInfo.name}
              </span>
              <button
                onClick={logoutHandler}
                className="bg-red-500/10 text-red-500 border border-red-500/50 px-4 py-1.5 rounded-full hover:bg-red-500 hover:text-white transition text-xs font-bold"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="hover:text-green-400">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 px-5 py-2 rounded-full hover:bg-green-700 transition font-bold text-xs"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <div
        className={`fixed inset-0 bg-black z-[99] md:hidden transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "68px", height: "calc(100vh - 68px)" }} // Navbar height එක ඇරෙන්න ඉතිරි ටික
      >
        <div className="flex flex-col h-full p-8 space-y-8">
          <div className="flex flex-col gap-6 text-2xl font-semibold">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-4 hover:text-green-500 transition"
            >
              <Home size={24} /> Home
            </Link>
            <Link
              to="/products"
              onClick={closeMenu}
              className="flex items-center gap-4 hover:text-green-500 transition"
            >
              <ShoppingBag size={24} /> Products
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="flex items-center gap-4 hover:text-green-500 transition"
            >
              <Info size={24} /> About
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center gap-4 hover:text-green-500 transition"
            >
              <Mail size={24} /> Contact
            </Link>
          </div>

          <div className="mt-auto pb-10 border-t border-white/10 pt-8">
            {userInfo ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                    {userInfo.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Logged in as</p>
                    <p className="text-lg font-bold">{userInfo.name}</p>
                  </div>
                </div>
                <button
                  onClick={logoutHandler}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 py-4 rounded-xl font-bold text-lg"
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="w-full py-4 text-center border border-white/20 rounded-xl font-bold text-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="w-full py-4 text-center bg-green-600 rounded-xl font-bold text-lg"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
