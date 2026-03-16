import { motion } from 'motion/react';
import Inventory from '../components/Inventory';

export default function Catalog() {
    return (
        <main className="pt-24 min-h-screen bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-[2rem] border border-stone-100 shadow-sm px-8 py-12 text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                        Our <span className="font-serif italic text-emerald-700">Catalog</span>
                    </h1>
                    <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
                        Browse our complete selection of premium wholesale plant material, meticulously cultivated for superior quality.
                    </p>
                </motion.div>
            </div>
            {/* Reuse the Inventory component, but it naturally fits the page vibe */}
            <div className="-mt-16">
                <Inventory />
            </div>
        </main>
    );
}
