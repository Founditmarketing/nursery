import { motion } from 'motion/react';
import { Leaf, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Specials() {
    const specials = [
        '7 Gal Cleyera Japonica',
        '3 Gal Gold Dust Acuba',
        '3 Gal Lavender Formosa',
        '3 Gal Fashion Azalea',
        '7 Gal Lavender Formosa',
        '7 Gal George Taber',
    ];

    return (
        <section id="specials" className="py-32 bg-stone-950 text-white relative overflow-hidden film-grain">
            {/* Decorative background leaf pattern */}
            <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 0.03, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 pointer-events-none text-emerald-500"
            >
                <Leaf className="w-[800px] h-[800px] -mt-64 -mr-64 opacity-20" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-stone-800 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-500 uppercase mb-4 gaussian-bloom">
                            Featured
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Weekly Specials
                        </h3>
                        <p className="text-stone-400 text-lg font-light leading-relaxed">
                            Check out our most popular, pristine plants this week. Contact us for priority pricing and prompt availability.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="bg-white text-stone-950 hover:bg-stone-200 px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-3 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5" /> Inquire Now
                        </Link>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specials.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                to="/contact"
                                className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:bg-stone-800 hover:border-emerald-900/30 transition-colors flex items-center justify-between group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-emerald-900/20 block"
                            >
                                <span className="font-medium text-lg text-stone-200 group-hover:text-emerald-300 transition-colors tracking-wide">{item}</span>
                                <div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:border-emerald-600 transition-all duration-300 group-hover:rotate-45">
                                    <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
