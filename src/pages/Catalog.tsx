import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/plantData';

export default function Catalog() {
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.toLowerCase().trim();
        if (!q) return categories;
        return categories
            .map(cat => {
                const nameMatch = cat.name.toLowerCase().includes(q);
                const matchingVarieties = cat.varieties?.filter(v =>
                    v.name.toLowerCase().includes(q)
                ) ?? [];
                if (nameMatch || matchingVarieties.length > 0) {
                    return { ...cat, _matchingVarieties: matchingVarieties, _nameMatch: nameMatch };
                }
                return null;
            })
            .filter(Boolean) as (typeof categories[number] & { _matchingVarieties: any[]; _nameMatch: boolean })[];
    }, [query]);

    return (
        <main className="min-h-screen">
            {/* White top section */}
            <div className="bg-white pt-24 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-[2rem] border-4 border-[#E0E0E0] px-8 py-12 text-center max-w-3xl mx-auto relative z-10 -mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-4 tracking-tight">
                            Our <span className="font-serif italic text-emerald-700">Catalog</span>
                        </h1>
                        <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto mb-8">
                            Browse our complete selection of premium wholesale plant material, meticulously cultivated for superior quality.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-lg mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                            <input
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search plants or varieties…"
                                className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 text-base"
                            />
                            <AnimatePresence>
                                {query && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        onClick={() => setQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grey catalog section */}
            <section className="bg-stone-100 py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Result count when searching */}
                    <AnimatePresence>
                        {query && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-stone-500 text-sm mb-8 text-center"
                            >
                                {filtered.length === 0
                                    ? `No results for "${query}"`
                                    : `${filtered.length} categor${filtered.length === 1 ? 'y' : 'ies'} matching "${query}"`}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    {/* Category Grid */}
                    <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((category, index) => {
                                const matchingVars = (category as any)._matchingVarieties ?? [];
                                const hasVarietyMatch = matchingVars.length > 0 && !(category as any)._nameMatch;
                                return (
                                    <motion.div
                                        key={category.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{ y: -12, scale: 1.01, rotateZ: index % 2 === 0 ? 1 : -1 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="will-change-transform"
                                    >
                                        <Link
                                            to={`/category/${category.id}`}
                                            className="group relative h-80 rounded-[2rem] overflow-hidden block shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500"
                                        >
                                            <img
                                                src={category.img}
                                                alt={category.name}
                                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.15] group-hover:blur-[2px]"
                                            />
                                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100 pointer-events-none" />
                                                <div className="z-30 relative">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-white font-medium text-xl tracking-wide group-hover:-translate-y-2 group-hover:drop-shadow-lg transition-transform duration-500">
                                                            {category.name}
                                                        </h4>
                                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border border-white/20">
                                                            <ChevronRight className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                    {/* Show matching variety names under the category name when searching */}
                                                    {hasVarietyMatch && (
                                                        <motion.p
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="text-emerald-300 text-xs mt-1 font-light"
                                                        >
                                                            {matchingVars.map((v: any) => v.name).join(' · ')}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {/* No results */}
                        {filtered.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-24"
                            >
                                <p className="text-stone-400 text-lg font-light">No plants found for "{query}"</p>
                                <button
                                    onClick={() => setQuery('')}
                                    className="mt-4 text-emerald-700 hover:text-emerald-600 text-sm font-medium underline underline-offset-2"
                                >
                                    Clear search
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
