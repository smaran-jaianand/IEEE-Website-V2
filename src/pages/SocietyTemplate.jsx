import { useParams, Navigate } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { societies } from '../data/societiesData';

const SocietyTemplate = () => {
    const { id } = useParams();
    const society = societies.find(s => s.id === id);

    if (!society) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Header */}
            <div className="relative py-16 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${society.color}, transparent 70%)`
                    }}
                ></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 w-full text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)] glass"
                        style={{ color: society.color, borderColor: society.color }}
                    >
                        {society.shortName}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-4 text-white"
                    >
                        {society.name}
                    </motion.h1>
                    <div className="h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: society.color }}></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 space-y-16">

                {/* 1. About Society */}
                <section className="glass p-10 rounded-3xl border border-white/5">
                    <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-8 mr-4 rounded-full" style={{ backgroundColor: society.color }}></span>
                        About Us
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {society.description}
                            </p>
                        </div>
                        {society.societyImage && (
                            <div className="w-full md:w-1/3">
                                <img
                                    src={society.societyImage}
                                    alt={`${society.name} Hero`}
                                    className="rounded-xl w-full h-auto object-cover shadow-lg"
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* 1.5 Vision & Mission */}
                {(society.vision || society.mission) && (
                    <section className="grid md:grid-cols-2 gap-8">
                        {society.vision && (
                            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl text-[var(--ieee-blue)] select-none pointer-events-none">
                                    <span style={{ color: society.color }}>Target</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-2 h-6 mr-3 rounded-full" style={{ backgroundColor: society.color }}></span>
                                    Our Vision
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    "{society.vision}"
                                </p>
                            </div>
                        )}
                        {society.mission && (
                            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl text-[var(--ieee-blue)] select-none pointer-events-none">
                                    <span style={{ color: society.color }}>Flag</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-2 h-6 mr-3 rounded-full" style={{ backgroundColor: society.color }}></span>
                                    Our Mission
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    "{society.mission}"
                                </p>
                            </div>
                        )}
                    </section>
                )}

                {/* 2. Slate Members (Leadership) */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center" style={{ textShadow: `0 0 20px ${society.color}40` }}>Executive Slate</h2>

                    {/* Slate Image */}
                    {society.slate?.image && (
                        <div className="mb-10 max-w-2xl mx-auto">
                            <img
                                src={society.slate.image}
                                alt={`${society.name} Executive Slate`}
                                className="rounded-2xl w-full h-auto object-cover border border-white/10 shadow-2xl"
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {society.slate?.members?.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ borderColor: 'rgba(255,255,255,0.05)' }}
                                whileHover={{
                                    y: -5,
                                    borderColor: society.color,
                                    backgroundColor: 'rgba(255,255,255,0.1)'
                                }}
                                transition={{ duration: 0.3 }}
                                className="glass p-6 rounded-2xl text-center border-t border-transparent"
                            >
                                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full mb-4 overflow-hidden flex items-center justify-center text-3xl">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    ) : (
                                        i === 0 ? '🎓' : '👤'
                                    )}
                                </div>
                                <h3 className="font-bold text-white text-lg leading-tight mb-1">{member.role}</h3>
                                <p className="text-sm text-gray-400 mb-3">{member.name}</p>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-gray-400 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                        title="Connect on LinkedIn"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Activities Section */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Our Activities</h2>
                    {society.activities?.length > 0 ? (
                        <div className="space-y-4">
                            {society.activities.map((activity, i) => (
                                <div key={i} className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10">
                                    <div className="w-full md:w-32 h-32 bg-white/5 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center text-gray-500">
                                        {activity.image ? (
                                            <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                                        ) : (
                                            'Activity Img'
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--ieee-blue)] transition-colors">{activity.title}</h3>
                                        <p className="text-gray-400">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No recent activities to show.</p>
                    )}
                </section>

                {/* 4. Media Section */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Gallery</h2>
                    {society.gallery?.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {society.gallery.map((imgSrc, i) => (
                                <div key={i} className="aspect-square bg-white/5 rounded-xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-white/5">
                                    {imgSrc ? (
                                        <img src={imgSrc} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                                            Photo {i + 1}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No images in gallery.</p>
                    )}
                </section>

            </div>
        </div>
    );
};

export default SocietyTemplate;
