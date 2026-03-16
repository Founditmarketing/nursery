import { motion } from 'motion/react';
import Inventory from '../components/Inventory';

export default function Catalog() {
    return (
        <main className="min-h-screen">
            {/* White top section */}
            <div className="bg-white pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-[2rem] border-4 border-[#D4D4D4] px-8 py-12 text-center max-w-3xl mx-auto relative z-10 -mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                            Our <span className="font-serif italic text-emerald-700">Catalog</span>
                        </h1>
                        <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
                            Browse our complete selection of premium wholesale plant material, meticulously cultivated for superior quality.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Grey bottom section — Inventory brings its own bg-stone-100 and py-32 top padding */}
            <Inventory />
        </main>
    );
}
