import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Reusing our beautiful generated images to populate the gallery
    const images = [
        { src: '/images/juniper-spiral.jpeg', alt: 'Spiral Juniper Topiary', size: 'large' },
        { src: '/images/grass-boxwood.jpeg', alt: 'Ornamental Grass and Boxwoods', size: 'regular' },
        { src: '/images/Screen-Shot-2020-08-11-at-10.28.36-AM.png', alt: 'Nursery rows', size: 'wide' },
        { src: '/images/juniper-rows.jpeg', alt: 'Rows of Trees', size: 'tall' },
        { src: '/images/Screen-Shot-2020-08-11-at-10.29.11-AM.png', alt: 'Boxwood shrubs', size: 'regular' },
        { src: '/images/shrubs-palms.jpeg', alt: 'Perennials and Palms', size: 'regular' },
        { src: '/images/Screen-Shot-2020-08-11-at-10.27.15-AM.png', alt: 'Gardenia flowers', size: 'wide' },
        { src: '/images/Screen-Shot-2021-11-05-at-1.08.11-PM.png', alt: 'Nursery plants', size: 'regular' },
        { src: '/images/Screen-Shot-2020-08-11-at-10.28.21-AM.png', alt: 'Green Shrubs', size: 'regular' },
        { src: '/images/Screen-Shot-2020-08-11-at-11.18.48-AM.png', alt: 'Lush greenery', size: 'tall' },
        { src: '/images/Screen-Shot-2020-08-11-at-10.30.49-AM.png', alt: 'Vibrant Azaleas', size: 'regular' },
        { src: '/images/Screen-Shot-2020-06-03-at-5.09.11-PM.png', alt: 'Healthy Hollies', size: 'regular' },
    ];

    return (
        <main className="pt-32 pb-24 min-h-screen bg-white">
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
                                className={`rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-shadow cursor-pointer ${spanClass}`}
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Enlarged gallery view"
                            className="max-w-full max-h-full object-contain cursor-default rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
