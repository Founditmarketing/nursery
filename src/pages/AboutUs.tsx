import { motion } from 'motion/react';
import AboutPreview from '../components/About';

export default function AboutUs() {
    return (
        <main className="pt-24 min-h-screen bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                        Our <span className="font-serif italic text-emerald-700">Heritage</span>
                    </h1>
                    <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto mb-12">
                        Discover the passion and history behind Louisiana's premier wholesale grower.
                    </p>
                </motion.div>
            </div>

            <div className="-mt-16">
                <AboutPreview />
            </div>

            {/* Extended History / Values Segment */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4 tracking-wide">Quality</h3>
                                <p className="text-stone-600 font-light">Uncompromising standards in every stem we grow.</p>
                            </div>
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4 tracking-wide">Integrity</h3>
                                <p className="text-stone-600 font-light">Honest partnerships with the contractors who trust us.</p>
                            </div>
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4 tracking-wide">Service</h3>
                                <p className="text-stone-600 font-light">Prompt, dependable logistics to keep your projects moving.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
