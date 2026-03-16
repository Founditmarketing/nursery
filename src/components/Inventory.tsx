import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Inventory() {
    const categories = [
        { name: 'Ground Cover', img: '/images/inventory_ground_cover.png' },
        { name: 'Azaleas', img: '/images/inventory_azalea.png' },
        { name: 'Juniper', img: '/images/inventory_juniper.png' },
        { name: 'Ornamental Grass', img: '/images/inventory_ornamental_grass.png' },
        { name: 'Boxwood', img: '/images/inventory_boxwood.png' },
        { name: 'Ligustrum', img: '/images/inventory_ligustrum.png' },
        { name: 'Perennials', img: '/images/inventory_perennials.png' },
        { name: 'Gardenia', img: '/images/inventory_gardenia.png' },
        { name: 'Trees', img: '/images/inventory_trees.png' },
        { name: 'Abelia', img: '/images/inventory_abelia.png' },
        { name: 'Hollies', img: '/images/inventory_hollies.png' },
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
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                y: -12,
                                scale: 1.01,
                            }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="will-change-transform"
                        >
                            <Link to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} className="group relative h-80 rounded-[2rem] overflow-hidden block shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.15]"
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
                            </Link>
                        </motion.div>
                    ))}

                    {/* Final Module: View Complete Catalog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{
                            y: -12,
                            scale: 1.01,
                        }}
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.6, delay: categories.length * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="will-change-transform"
                    >
                        <Link to="/catalog" className="group relative h-80 rounded-[2rem] overflow-hidden block shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.4)] transition-all duration-500 bg-emerald-700 flex flex-col items-center justify-center text-center p-8">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
                            
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-xl border border-white/30">
                                <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                            
                            <h4 className="text-white font-medium text-2xl tracking-wide group-hover:-translate-y-1 group-hover:drop-shadow-lg transition-transform duration-500">
                                View Complete Catalog
                            </h4>
                            <p className="text-emerald-100 font-light mt-4 text-sm max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                Explore our full selection of plants and trees.
                            </p>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
