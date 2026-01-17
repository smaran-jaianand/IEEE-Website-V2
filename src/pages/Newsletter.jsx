import { Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
            <h1 className="text-5xl font-display font-bold text-white mb-12 text-center">Newsletter</h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Coming Soon Section */}
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-6 glass rounded-3xl p-10 border border-white/5">
                    <div className="w-20 h-20 bg-[var(--ieee-blue)]/20 rounded-full flex items-center justify-center text-[var(--ieee-blue)] mb-4 animate-pulse">
                        <Mail size={40} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Coming Soon</h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto">
                            We are crafting something amazing. The first edition of our newsletter will be dropping soon!
                        </p>
                    </div>
                </div>

                {/* Subscription Box */}
                <div className="glass rounded-3xl p-10 border border-[rgba(255,255,255,0.1)] sticky top-32">
                    <div className="w-14 h-14 bg-[var(--symbiosis-red)]/20 rounded-2xl flex items-center justify-center mb-6 text-[var(--symbiosis-red)] mx-auto">
                        <Mail size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">Stay in the Loop</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed text-center">
                        Get the latest updates, event announcements, and tech articles delivered straight to your inbox. No spam, just knowledge.
                    </p>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:ring-2 focus:ring-[var(--symbiosis-red)] focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <button type="submit" className="w-full bg-[var(--symbiosis-red)] hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(239,51,64,0.3)] hover:shadow-[0_4px_30px_rgba(239,51,64,0.5)] transform hover:-translate-y-0.5">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
