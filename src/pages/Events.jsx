const Events = () => {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
            <h1 className="text-5xl font-display font-bold text-white mb-12 text-center">Upcoming Events</h1>

            <div className="glass rounded-3xl p-16 text-center border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]">
                <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
                    <span className="text-3xl">🗓️</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Page Under Construction</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Our code monkeys are working hard to bring you the latest events. Please come back later!
                </p>
                <div className="mt-10 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-[var(--ieee-blue)] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[var(--ieee-blue)] rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-[var(--ieee-blue)] rounded-full animate-pulse delay-150"></div>
                </div>
            </div>
        </div>
    );
};

export default Events;
