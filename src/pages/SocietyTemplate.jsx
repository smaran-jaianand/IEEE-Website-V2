import { useParams, Navigate } from 'react-router-dom';
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
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        The {society.name} at IEEE SIT Student Branch is committed to excellence in the field.
                        We provide a platform for students to explore, innovate, and create. Through our various
                        initiatives, we aim to bridge the gap between academic learning and industry requirements.
                    </p>
                </section>

                {/* 2. Slate Members (Leadership) */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center" style={{ textShadow: `0 0 20px ${society.color}40` }}>Executive Slate</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Mock Slate Data - Including Faculty Rep */}
                        {[
                            { role: 'Branch Counselor', name: 'Faculty Name' },
                            { role: 'Chairperson', name: 'Student Name' },
                            { role: 'Vice-Chair', name: 'Student Name' },
                            { role: 'Secretary', name: 'Student Name' },
                        ].map((member, i) => (
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
                                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full mb-4 flex items-center justify-center text-3xl">
                                    {i === 0 ? '🎓' : '👤'}
                                </div>
                                <h3 className="font-bold text-white text-lg leading-tight mb-1">{member.role}</h3>
                                <p className="text-sm text-gray-400">{member.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Activities Section */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Our Activities</h2>
                    <div className="space-y-4">
                        {['Technical Workshop on AI', 'Industrial Visit to Tech Park', 'Guest Lecture Series'].map((activity, i) => (
                            <div key={i} className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10">
                                <div className="w-full md:w-32 h-32 bg-white/5 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-500">
                                    Activity Img
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--ieee-blue)] transition-colors">{activity}</h3>
                                    <p className="text-gray-400">
                                        A brief description of the activity goes here. It was an insightful session where students learned about key technologies.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Media Section */}
                <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-square bg-white/5 rounded-xl overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border border-white/5">
                                <div className="w-full h-full flex items-center justify-center text-gray-600">
                                    Photo {i}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SocietyTemplate;
