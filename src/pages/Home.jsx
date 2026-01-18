import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Calendar, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { societies } from '../data/societiesData';
import { studentBranch } from '../data/studentBranch';

const Home = () => {
    return (
        <>
            <div className="w-full overflow-x-hidden relative">

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
                    <div className="relative z-10 max-w-5xl mx-auto">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
                        >
                            <span className="text-white">Innovating for</span>
                            <br />
                            <span className="text-gradient-primary">Tomorrow</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Join the world's largest technical professional organization for the advancement of technology.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link to="/events" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--ieee-blue)] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,98,155,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center">
                                Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/society/cs" className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-bold text-lg transition-all flex items-center justify-center">
                                Our Societies
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Introduction / Stats */}
                <section className="relative py-24 z-10">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, label: "Active Members", val: "500+" },
                            { icon: Calendar, label: "Annual Events", val: "25+" },
                            { icon: Globe, label: "Technical Societies", val: "16" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-2xl text-center border-t border-[rgba(255,255,255,0.1)]"
                            >
                                <stat.icon className="w-12 h-12 text-[var(--ieee-blue)] mx-auto mb-4" />
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.val}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About IEEE SBC */}
                <section className="relative py-20 z-10 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <h2 className="text-4xl font-display font-bold text-white mb-6">
                                About IEEE SBC at <br />
                                <span className="text-gradient-primary">Symbiosis Hyderabad</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                The IEEE Student Branch at Symbiosis Institute of Technology, Hyderabad, is a vibrant community of technology enthusiasts. We are dedicated to fostering technical innovation, professional development, and collaborative learning among students. Through workshops, seminars, and projects, we aim to bridge the gap between academic learning and industry requirements.
                            </p>
                            <Link to="/about" className="text-[var(--ieee-blue)] font-bold hover:underline inline-flex items-center group">
                                Learn More <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 group">
                                <div className="absolute inset-0 bg-[var(--ieee-blue)]/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src="/images/general/about-sbc.jpg"
                                    alt="IEEE SBC Team"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-0 bg-[#0f1522]">
                                    <span className="text-gray-600">About SBC Image Placeholder</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Team / ExeCom */}
                <section className="relative py-24 bg-[var(--bg-dark)] z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Executive Committee</h2>
                            <div className="w-24 h-1 bg-[var(--ieee-blue)] mx-auto rounded-full"></div>
                            <p className="mt-4 text-gray-400">The core team driving our vision forward.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {studentBranch.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="glass p-6 rounded-2xl text-center border-t border-transparent hover:border-[var(--ieee-blue)] transition-colors"
                                >
                                    <div className="w-24 h-24 mx-auto bg-white/5 rounded-full mb-4 overflow-hidden flex items-center justify-center text-3xl">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        ) : (
                                            '🎓'
                                        )}
                                    </div>
                                    <h3 className="font-bold text-white text-lg leading-tight mb-1 min-h-[3rem] items-center flex justify-center">{member.name}</h3>
                                    <p className="text-sm text-gray-400">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Societies Grid */}
                <section className="relative py-24 bg-[var(--bg-dark)] z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Chapters</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[var(--ieee-blue)] to-[var(--symbiosis-red)] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {societies.map((society, index) => (
                                <motion.div
                                    key={society.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    className="group relative glass p-1 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,98,155,0.2)] transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.02)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="bg-[#0f1522] h-full p-6 rounded-xl flex flex-col items-center text-center relative z-10">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg"
                                            style={{ backgroundColor: society.color }}
                                        >
                                            {society.shortName}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--ieee-blue)] transition-colors">{society.name}</h3>
                                        <div className="mt-auto pt-4">
                                            <Link to={`/society/${society.id}`} className="inline-flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                                Explore <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
