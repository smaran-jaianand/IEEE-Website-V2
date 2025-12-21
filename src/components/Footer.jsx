import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#05080f] text-white pt-20 pb-10 border-t border-[rgba(255,255,255,0.05)] z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-display text-3xl font-bold tracking-wider mb-6 text-[var(--ieee-blue)]">IEEE SIT SB</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            A community-driven student branch dedicated to fostering technological innovation and excellence for the benefit of humanity. Join us at Symbiosis Institute of Technology.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Explore</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[var(--ieee-blue)] transition-colors">About Branch</a></li>
                            <li><a href="#" className="hover:text-[var(--ieee-blue)] transition-colors">Join Membership</a></li>
                            <li><a href="#" className="hover:text-[var(--ieee-blue)] transition-colors">Meet the Team</a></li>
                            <li><a href="#" className="hover:text-[var(--ieee-blue)] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[var(--ieee-blue)] hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[var(--ieee-blue)] hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={20} /></a>
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[var(--ieee-blue)] hover:text-white transition-all transform hover:-translate-y-1"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} IEEE SIT Student Branch. Crafted with <span className="text-red-500">♥</span> by the Web Team.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
