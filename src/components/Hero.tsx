import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden film-grain">
            {/* Background Image with Parallax & Cinematic Grading */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/images/hero.png"
                    alt="Greenhouse interior with lush plants"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-900/40 to-stone-950/90" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeIn} className="mb-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md border border-emerald-400/20 gaussian-bloom">
                            Louisiana Based Wholesale Nursery
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn}
                        className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
                    >
                        Cultivating <br className="hidden md:block" />
                        <span className="text-emerald-400 italic font-serif">Quality</span> &amp; <span className="text-emerald-400 italic font-serif">Beauty</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        RoxAnne's Southern Roots Nursery provides exceptional plant material for designers, contractors, and homeowners.
                    </motion.p>

                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <a
                            href="#catalog"
                            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
                        >
                            Explore Inventory
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#specials"
                            className="w-full sm:w-auto bg-stone-900/40 hover:bg-stone-800/60 text-white backdrop-blur-md border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                        >
                            View Weekly Specials
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Bottom Gradient to blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
