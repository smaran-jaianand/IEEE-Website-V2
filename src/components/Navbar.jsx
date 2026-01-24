import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { societies } from '../data/societiesData';
import { societySlates } from '../data/slate';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--ieee-blue)] ${isActive ? 'text-[var(--ieee-blue)]' : 'text-gray-300'
        }`;

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            {/* Floating Pill Container */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`
            w-full max-w-5xl rounded-2xl border border-[rgba(255,255,255,0.08)] 
            backdrop-blur-xl transition-all duration-300
            ${scrolled ? 'bg-[#0a0e17]/80 shadow-2xl py-3 px-6' : 'bg-[#0a0e17]/50 py-4 px-8'}
          `}
            >
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                        <img src="/images/logo.png" alt="IEEE SIT SB" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-center flex-1 ml-10">
                        <div className="flex items-center space-x-1 lg:space-x-4">
                            <NavLink to="/" className={navLinkClass}>Home</NavLink>

                            {/* Societies Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button className="flex items-center px-3 text-sm font-medium text-gray-300 hover:text-[var(--ieee-blue)] transition-colors focus:outline-none py-2">
                                    Societies <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-xl border border-[rgba(255,255,255,0.1)] shadow-2xl overflow-hidden bg-[#05070a]"
                                        >
                                            <div className="py-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                                {societies.map((society) => {
                                                    const slate = societySlates[society.id];
                                                    const hasSlate = slate?.members && slate.members.length > 0;

                                                    if (hasSlate) {
                                                        return (
                                                            <Link
                                                                key={society.id}
                                                                to={`/society/${society.id}`}
                                                                className="block px-5 py-3.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-l-4 border-transparent hover:border-[var(--ieee-blue)]"
                                                            >
                                                                <span className="font-bold block tracking-wide">{society.shortName}</span>
                                                                <span className="text-[10px] text-gray-500 font-normal uppercase tracking-wider">{society.name}</span>
                                                            </Link>
                                                        );
                                                    } else {
                                                        return (
                                                            <div
                                                                key={society.id}
                                                                className="block px-5 py-3.5 text-sm text-gray-600 cursor-not-allowed border-l-4 border-transparent"
                                                            >
                                                                <span className="font-bold block tracking-wide">{society.shortName}</span>
                                                                <span className="text-[10px] text-gray-700 font-normal uppercase tracking-wider">Coming Soon</span>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <NavLink to="/events" className={navLinkClass}>Events</NavLink>
                            <NavLink to="/media" className={navLinkClass}>Media</NavLink>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                        <NavLink to="/newsletter" className="px-5 py-2 rounded-full bg-gradient-to-r from-[var(--ieee-blue)] to-[var(--ieee-dark-blue)] text-white text-xs font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,98,155,0.4)] hover:scale-105 transition-all duration-300">
                            Newsletter
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] focus:outline-none"
                        >
                            {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-24 left-4 right-4 z-40 bg-[#0a0e17] border border-white/10 rounded-2xl shadow-xl overflow-hidden p-4 glass"
                    >
                        <Link to="/" className="block px-4 py-3 font-bold text-white hover:bg-white/5 rounded-lg">Home</Link>

                        <div className="px-4 py-2 text-sm font-bold text-[var(--ieee-blue)]">Societies</div>
                        <div className="grid grid-cols-2 gap-2 px-4 mb-4">
                            {societies.map((society) => {
                                const slate = societySlates[society.id];
                                const hasSlate = slate?.members && slate.members.length > 0;

                                if (hasSlate) {
                                    return (
                                        <Link
                                            key={society.id}
                                            to={`/society/${society.id}`}
                                            className="text-xs text-gray-400 hover:text-white py-1"
                                        >
                                            {society.shortName}
                                        </Link>
                                    );
                                } else {
                                    return (
                                        <span
                                            key={society.id}
                                            className="text-xs text-gray-700 cursor-not-allowed py-1"
                                        >
                                            {society.shortName}
                                        </span>
                                    );
                                }
                            })}
                        </div>

                        <Link to="/events" className="block px-4 py-3 font-bold text-white hover:bg-white/5 rounded-lg">Events</Link>
                        <Link to="/media" className="block px-4 py-3 font-bold text-white hover:bg-white/5 rounded-lg">Media</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
