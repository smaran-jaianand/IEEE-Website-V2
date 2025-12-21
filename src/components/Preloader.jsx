import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';

const Preloader = ({ onFinish }) => {
    const { progress, active } = useProgress();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Fake progress logic to ensure "soft loading" feel
        // If real progress is faster, we still smoothly animate to it
        // If real progress is slower, we wait

        let interval;

        // Target is the real progress, but we animate towards it
        // If active is false (loaded), target is 100
        const target = active ? progress : 100;

        if (percentage < 100) {
            interval = setInterval(() => {
                setPercentage(prev => {
                    const diff = target - prev;
                    if (diff === 0) return prev;
                    // Increment by a small amount or jump if target is much higher
                    const inc = diff > 0 ? Math.ceil(diff / 10) : 0;
                    return Math.min(prev + inc, 100);
                });
            }, 50);
        } else {
            // Complete
            setTimeout(() => onFinish(), 500); // Small delay at 100%
        }

        return () => clearInterval(interval);
    }, [progress, active, percentage, onFinish]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[var(--bg-dark)] flex flex-col items-center justify-center text-white"
        >
            <div className="w-96 space-y-6 text-center">
                {/* Logo or Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-display font-bold text-[var(--ieee-blue)] mb-6"
                >
                    IEEE SIT SB
                </motion.div>

                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--ieee-blue)] to-[var(--symbiosis-red)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Text */}
                <div className="flex justify-between text-xs text-gray-400 font-mono">
                    <span>INITIALIZING SYSTEMS...</span>
                    <span>{Math.round(percentage)}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
