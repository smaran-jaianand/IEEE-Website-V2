const Media = () => {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display font-bold text-white mb-4">Gallery</h1>
                <p className="text-gray-400">Capturing moments of innovation and collaboration.</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden glass hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500">
                        <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600 group-hover:scale-110 transition-transform duration-700">
                            Image {i}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <p className="text-white font-bold">Event Title {i}</p>
                            <p className="text-sm text-gray-300">Date • Location</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
