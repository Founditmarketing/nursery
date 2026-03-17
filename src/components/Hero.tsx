import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const letterAnimation = {
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.2
        },
    },
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const titleWords1 = "Cultivating".split("");
    const titleWords2 = "Quality".split("");
    const titleWords3 = "&".split("");
    const titleWords4 = "Beauty".split("");

    return (
        <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden film-grain">
            {/* Background Image with Parallax & Cinematic Grading */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute inset-0 z-0 origin-top"
            >
                <motion.video
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    src="/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-900/40 to-stone-950/90" />
            </motion.div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-64"
            >
                <motion.div className="max-w-4xl mx-auto flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="mb-8"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md border border-emerald-400/20 gaussian-bloom">
                            Louisiana Based Wholesale Nursery
                        </span>
                    </motion.div>

                    <motion.h1
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2"
                        style={{ perspective: 1000 }}
                    >
                        <div className="flex overflow-hidden py-1 px-1">
                            {titleWords1.map((char, index) => (
                                <motion.span key={`w1-${index}`} variants={letterAnimation} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
                            ))}
                        </div>
                        <div className="flex overflow-hidden py-1 px-1 text-emerald-400 italic font-serif">
                            {titleWords2.map((char, index) => (
                                <motion.span key={`w2-${index}`} variants={letterAnimation} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
                            ))}
                        </div>
                        <div className="flex overflow-hidden py-1 px-1">
                            {titleWords3.map((char, index) => (
                                <motion.span key={`w3-${index}`} variants={letterAnimation} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
                            ))}
                        </div>
                        <div className="flex overflow-hidden py-1 px-1 text-emerald-400 italic font-serif">
                            {titleWords4.map((char, index) => (
                                <motion.span key={`w4-${index}`} variants={letterAnimation} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{char}</motion.span>
                            ))}
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        RoxAnne's Southern Roots Nursery provides exceptional plant material for designers, contractors, and homeowners.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                to="/catalog"
                                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                            >
                                Explore Inventory
                                <motion.div
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                to="/#specials"
                                className="w-full sm:w-auto bg-stone-900/40 hover:bg-stone-800/60 text-white backdrop-blur-md border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                View Weekly Specials
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Bottom Gradient to blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
