import { Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
            <h1 className="text-5xl font-display font-bold text-white mb-12 text-center">Newsletter</h1>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Archive List */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-200 border-b border-gray-800 pb-4">Recent Editions</h3>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group flex items-center p-6 glass rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-[var(--ieee-blue)] text-left">
                            <div className="w-12 h-12 rounded-full bg-[var(--ieee-blue)]/20 flex items-center justify-center mr-6 text-[var(--ieee-blue)]">
                                <span className="font-bold text-xl">{i}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-white group-hover:text-[var(--ieee-blue)] transition-colors">Vol. {i}: Technovation</h3>
                                <p className="text-sm text-gray-400">October 2024</p>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg group-hover:bg-[var(--ieee-blue)] transition-colors">Read</button>
                        </div>
                    ))}
                </div>

                {/* Subscription Box */}
                <div className="glass rounded-3xl p-10 border border-[rgba(255,255,255,0.1)] sticky top-32">
                    <div className="w-14 h-14 bg-[var(--symbiosis-red)]/20 rounded-2xl flex items-center justify-center mb-6 text-[var(--symbiosis-red)]">
                        <Mail size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
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
