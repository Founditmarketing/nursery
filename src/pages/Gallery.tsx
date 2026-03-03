import { motion } from 'motion/react';

export default function Gallery() {
    // Reusing our beautiful generated images to populate the gallery
    const images = [
        { src: '/images/hero.png', alt: 'Greenhouse interior', size: 'large' },
        { src: '/images/inventory_azalea.png', alt: 'Azaleas', size: 'regular' },
        { src: '/images/nursery_about.png', alt: 'Nursery workers holding plants', size: 'wide' },
        { src: '/images/inventory_trees.png', alt: 'Trees', size: 'tall' },
        { src: '/images/inventory_boxwood.png', alt: 'Boxwood shrubs', size: 'regular' },
        { src: '/images/inventory_ornamental_grass.png', alt: 'Ornamental Grass', size: 'regular' },
        { src: '/images/inventory_gardenia.png', alt: 'Gardenia flowers', size: 'wide' },
        { src: '/images/inventory_juniper.png', alt: 'Juniper shrubs', size: 'regular' },
        { src: '/images/inventory_ground_cover.png', alt: 'Ground cover plants', size: 'regular' },
        { src: '/images/inventory_perennials.png', alt: 'Perennials blooming', size: 'tall' },
    ];

    return (
        <main className="pt-32 pb-24 min-h-screen bg-stone-100 film-grain">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                        Our <span className="font-serif italic text-emerald-700">Gallery</span>
                    </h1>
                    <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
                        Explore scenes from our Louisiana nursery, featuring our pristine wholesale plant material.
                    </p>
                </motion.div>

                {/* CSS Grid Masonry approximation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                    {images.map((img, index) => {
                        let spanClass = 'col-span-1 row-span-1';
                        if (img.size === 'large') spanClass = 'md:col-span-2 md:row-span-2';
                        else if (img.size === 'wide') spanClass = 'md:col-span-2 row-span-1';
                        else if (img.size === 'tall') spanClass = 'col-span-1 row-span-2';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ duration: 0.5, delay: (index % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-shadow ${spanClass}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
