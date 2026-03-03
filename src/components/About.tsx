import { motion, useScroll, useTransform } from 'motion/react';
import { Truck } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const yBadge = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const rotateBadge = useTransform(scrollYProgress, [0, 1], [-5, 5]);

    return (
        <section id="about" ref={containerRef} className="py-32 bg-stone-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-4">
                            Our Story
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight">
                            25 Years of <br />
                            <span className="font-serif italic text-emerald-700">Growing</span> Together
                        </h3>

                        <div className="space-y-6 text-xl text-stone-600 leading-relaxed font-light">
                            <p>
                                Located in the heart of Lecompte, Louisiana, RoxAnne's Southern Roots Nursery is a trusted wholesale grower supplying all of Louisiana and surrounding states.
                            </p>
                            <p>
                                With over a quarter-century in the nursery business, we are dedicated to delivering outstanding customer experiences by producing the highest quality plant material. We partner closely with designers, architects, landscape contractors, municipalities, and custom homebuilders.
                            </p>
                            <p className="font-serif italic text-2xl text-stone-900 pt-4">
                                "Come grow with me."
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-10 pt-10 border-t border-stone-200">
                            <div>
                                <div className="text-5xl font-bold text-emerald-800 mb-3 tracking-tighter">25+</div>
                                <div className="text-xs text-stone-500 font-bold uppercase tracking-[0.15em]">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-emerald-800 mb-3 tracking-tighter">100%</div>
                                <div className="text-xs text-stone-500 font-bold uppercase tracking-[0.15em]">Quality Guarantee</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group"
                        >
                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                            <motion.img
                                style={{ y: yImage, scale: 1.15 }}
                                src="/images/about.png"
                                alt="Lush green plants"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.2] origin-center"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>

                        {/* Floating Badge with Parallax */}
                        <motion.div
                            style={{ y: yBadge, rotate: rotateBadge }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] max-w-sm hidden md:block border border-stone-100"
                        >
                            <div className="flex items-start gap-5">
                                <div className="bg-emerald-50 p-4 rounded-xl text-emerald-700 shrink-0 shadow-inner">
                                    <Truck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg mb-1 tracking-tight">Dependable Shipping</h4>
                                    <p className="text-stone-500 leading-relaxed font-light">We arrange careful, prompt shipping with transport specialists you can trust.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
