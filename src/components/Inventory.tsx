import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Inventory() {
    const categories = [
        { name: 'Azaleas', img: '/images/inventory_azalea.png' },
        { name: 'Ground Cover', img: '/images/inventory_ground_cover.png' },
        { name: 'Juniper', img: '/images/inventory_juniper.png' },
        { name: 'Ornamental Grass', img: '/images/inventory_ornamental_grass.png' },
        { name: 'Boxwood', img: '/images/inventory_boxwood.png' },
        { name: 'Perennials', img: '/images/inventory_perennials.png' },
        { name: 'Trees', img: '/images/inventory_trees.png' },
        { name: 'Gardenia', img: '/images/inventory_gardenia.png' },
    ];

    return (
        <section id="catalog" className="py-32 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">
                        Inventory
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                        Curated Selections
                    </h3>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                        Explore our wide variety of high-quality plants perfect for any landscaping project, nurtured to thrive.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <motion.a
                            href="#contact"
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                y: -12,
                                scale: 1.01,
                                rotateZ: index % 2 === 0 ? 1 : -1,
                            }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-80 rounded-[2rem] overflow-hidden block shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 will-change-transform"
                        >
                            <img
                                src={category.img}
                                alt={category.name}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.15] group-hover:blur-[2px]"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100 pointer-events-none" />
                                <div className="flex items-center justify-between z-30 relative">
                                    <h4 className="text-white font-medium text-xl tracking-wide group-hover:-translate-y-2 group-hover:drop-shadow-lg transition-transform duration-500">
                                        {category.name}
                                    </h4>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border border-white/20">
                                        <ChevronRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a href="#" className="inline-flex items-center gap-3 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors uppercase tracking-widest text-sm group">
                        View Complete Catalog
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
