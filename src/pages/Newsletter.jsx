import { Mail, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { newslettersData } from '../data/newslettersData';

const Newsletter = () => {
    // Using imported data from ../data/newslettersData.js
    const newsletters = newslettersData;

    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
            <h1 className="text-5xl font-display font-bold text-white mb-4 text-center">Newsletter</h1>
            <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
                Stay updated with the pulse of technology and student innovation.
            </p>

            {/* Newsletter Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {newsletters.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--ieee-blue)]/50 transition-all duration-300 group"
                    >
                        {/* Card Header / Thumbnail Placeholder */}
                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-black flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--ieee-blue)]/10 group-hover:bg-[var(--ieee-blue)]/20 transition-colors" />
                            <BookOpen size={48} className="text-[var(--ieee-blue)]/80 relative z-10" />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-[var(--ieee-blue)] border border-[var(--ieee-blue)]/30">
                                {item.version}, {item.issue}
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold text-white group-hover:text-[var(--ieee-blue)] transition-colors">
                                    {item.title}
                                </h2>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                    {item.date}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                {item.description}
                            </p>

                            <a
                                href={item.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-[var(--ieee-blue)]/10 text-[var(--ieee-blue)] font-bold border border-[var(--ieee-blue)]/20 hover:bg-[var(--ieee-blue)] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,98,155,0.4)]"
                            >
                                <BookOpen size={18} />
                                Read Now
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Subscription Box - Hidden for now */}
            {/* 
            <div className="glass rounded-3xl p-10 border border-[rgba(255,255,255,0.1)] max-w-2xl mx-auto opacity-50 grayscale pointer-events-none hidden">
                <div className="w-14 h-14 bg-[var(--symbiosis-red)]/20 rounded-2xl flex items-center justify-center mb-6 text-[var(--symbiosis-red)] mx-auto">
                    <Mail size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 text-center">Stay in the Loop</h2>
                <p className="text-gray-400 mb-8 leading-relaxed text-center">
                    Get the latest updates, event announcements, and tech articles delivered straight to your inbox.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    // ... form content
                </form>
            </div> 
            */}
        </div>
    );
};

export default Newsletter;
