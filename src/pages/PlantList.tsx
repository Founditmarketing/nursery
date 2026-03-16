import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, Search, X } from 'lucide-react';

const listCategories = [
    {
        title: "Ground Cover",
        items: [
            { name: "Aspidistria", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Giant Liriope", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Green Liriope", sizes: ["4 Inch", "1 Gallon"] },
            { name: "Jasmine Asian", sizes: ["4 Inch", "1 Gallon"] },
            { name: "Mondo Dwarf", sizes: ["4 Inch", "1 Gallon"] },
            { name: "Mondo Regular", sizes: ["4 Inch", "1 Gallon"] },
            { name: "V. Liriope", sizes: ["4 Inch", "1 Gallon"] },
            { name: "Super Blue", sizes: ["1 Gallon", "3 Gallon"] },
        ]
    },
    {
        title: "Ornamental Grass",
        items: [
            { name: "Adagio", sizes: ["3 Gallon"] },
            { name: "Hamelin Dwarf", sizes: [] },
            { name: "Mexican Feather Grass", sizes: [] },
            { name: "Miscanthus Regular", sizes: ["3 Gallon"] },
            { name: "Miscanthus Var.", sizes: ["3 Gallon"] },
            { name: "Muhly Lindheimer", sizes: ["3 Gallon"] },
            { name: "Muhly Pink", sizes: ["3 Gallon"] },
        ]
    },
    {
        title: "Perennials",
        items: [
            { name: "Agapanthus Blue", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Agapanthus White", sizes: [] },
            { name: "Fox Tail Fern", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Iris African", sizes: [] },
            { name: "Iris Bi-Color", sizes: ["3 Gallon"] },
            { name: "Lantana Lavender", sizes: ["1 Gallon"] },
            { name: "Lantana Red", sizes: ["1 Gallon"] },
            { name: "Lantana Yellow", sizes: ["1 Gallon"] },
            { name: "Lantana White", sizes: [] },
            { name: "Rosemary Creeping", sizes: [] },
            { name: "Rosemary Upright", sizes: ["3 Gallon"] },
            { name: "Sage Mexican Bush", sizes: ["3 Gallon"] },
            { name: "Salvia Greggi Red", sizes: ["3 Gallon"] },
            { name: "Skullcap Pink", sizes: ["1 Gallon"] },
            { name: "Society Garlic", sizes: ["1 Gallon"] },
            { name: "Yellow Iris", sizes: [] },
        ]
    },
    {
        title: "Azaleas",
        items: [
            { name: "Fashion", sizes: ["3 Gallon"] },
            { name: "Formosa", sizes: ["3 Gallon", "7 Gallon"] },
            { name: "Pink Formosa", sizes: ["7 Gallon"] },
            { name: "Red Formosa", sizes: ["7 Gallon"] },
            { name: "GG Gerbing", sizes: ["3 Gallon"] },
            { name: "George Tabor", sizes: ["3 Gallon"] },
            { name: "Pink Ruffle", sizes: ["7 Gallon"] },
            { name: "Red Ruffle", sizes: ["7 Gallon"] },
        ]
    },
    {
        title: "Shrubs / Abelia",
        items: [
            { name: "Edward Goucher", sizes: [] },
            { name: "Frances Mason", sizes: [] },
            { name: "Glossy", sizes: [] },
            { name: "Kaleidoscope", sizes: [] },
        ]
    },
    {
        title: "Boxwood",
        items: [
            { name: "Japanese Boxwood", sizes: ["7 Gallon"] },
            { name: "Wintergreen", sizes: ["3 Gallon", "7 Gallon"] },
        ]
    },
    {
        title: "Gardenia",
        items: [
            { name: "August Beauty", sizes: ["3 Gallon"] },
            { name: "Frost Proof", sizes: ["3 Gallon"] },
            { name: "Radican", sizes: ["3 Gallon"] },
        ]
    },
    {
        title: "Hollies",
        items: [
            { name: "Burford Dwarf", sizes: ["3 Gallon"] },
            { name: "Carissa", sizes: ["3 Gallon"] },
            { name: "Coned Compacta", sizes: ["3 Gallon"] },
            { name: "Needle Point", sizes: ["3 Gallon"] },
            { name: "Nellie R Stephens", sizes: ["3 Gallon"] },
            { name: "Sky Pencil", sizes: ["3 Gallon", "7 Gallon"] },
            { name: "Yaupon Dwarf", sizes: ["3 Gallon"] },
            { name: "Yaupon Upright", sizes: ["15 Gallon"] },
        ]
    },
    {
        title: "Juniper",
        items: [
            { name: "Andorra", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Bar Harbor", sizes: ["1 Gallon", "3 Gallon"] },
            { name: "Blue Pacific", sizes: ["15 Gallon"] },
            { name: "Blue Point", sizes: [] },
            { name: "Parsoni", sizes: [] },
        ]
    },
    {
        title: "Ligustrum",
        items: [
            { name: "Howardi", sizes: ["7 Gallon"] },
            { name: "Wax", sizes: [] },
            { name: "Acuba Gold Dust", sizes: ["7 Gallon"] },
            { name: "Cleyera Japonica", sizes: ["3 Gallon"] },
            { name: "Don's Dwarf Wax Myrtle", sizes: ["3 Gallon"] },
            { name: "Eleagnus", sizes: ["3 Gallon", "7 Gallon", "15 Gallon"] },
            { name: "Japanese Yew", sizes: ["7 Gallon"] },
            { name: "Loropetalum", sizes: ["3 Gallon", "7 Gallon"] },
            { name: "Palmetto Dwarf", sizes: [] },
        ]
    },
    {
        title: "Other Shrubs",
        items: [
            { name: "Pittosporum Dwarf", sizes: ["3 Gallon", "7 Gallon", "15 Gallon"] },
            { name: "Pittosporum Var.", sizes: ["3 Gallon"] },
            { name: "Shi Shi", sizes: ["3 Gallon", "7 Gallon"] },
            { name: "Sweet Olive", sizes: ["7 Gallon"] },
            { name: "Var. Privitt", sizes: [] },
        ]
    },
    {
        title: "Trees",
        items: [
            { name: "Crape Myrtle Basham", sizes: [] },
            { name: "Crape Myrtle Natchez", sizes: [] },
            { name: "Crape Myrtle Tuscorora", sizes: ["15 Gallon"] },
            { name: "Magnolia Little Jem", sizes: ["5 Gal"] },
            { name: "Oak Live", sizes: ["4 Inch"] },
        ]
    }
];

export default function PlantList() {
    const [query, setQuery] = useState('');
    const [activeType, setActiveType] = useState<string | null>(null);

    const filtered = useMemo(() => {
        const q = query.toLowerCase().trim();
        return listCategories
            .filter(cat => !activeType || cat.title === activeType)
            .map(cat => {
                const categoryMatch = q && cat.title.toLowerCase().includes(q);
                return {
                    ...cat,
                    items: cat.items.filter(item =>
                        !q || categoryMatch || item.name.toLowerCase().includes(q)
                    ),
                };
            })
            .filter(cat => cat.items.length > 0);
    }, [query, activeType]);

    const totalResults = filtered.reduce((acc, cat) => acc + cat.items.length, 0);

    return (
        <main className="pt-32 pb-24 min-h-screen bg-stone-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                        Current <span className="font-serif italic text-emerald-700">Availability</span>
                    </h1>
                    <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto mb-10">
                        Review our comprehensive plant list. For bulk orders and specific size requests, please reference this sheet when contacting us.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/PlantList.pdf"
                        onClick={(e) => { e.preventDefault(); alert("PDF Download would initiate here."); }}
                        className="inline-flex items-center justify-center gap-3 bg-stone-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-xl"
                    >
                        <Download className="w-5 h-5" /> Download Full PDF List
                    </motion.a>
                </motion.div>

                {/* Search + Filter Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-[2rem] p-6 border border-stone-100 shadow-sm mb-10 space-y-5"
                >
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search plants…"
                            className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-stone-200 bg-stone-50 text-stone-900 placeholder-stone-400 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
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

                    {/* Type Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveType(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                activeType === null
                                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-emerald-400 hover:text-emerald-700'
                            }`}
                        >
                            All Types
                        </button>
                        {listCategories.map(cat => (
                            <button
                                key={cat.title}
                                onClick={() => setActiveType(activeType === cat.title ? null : cat.title)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                                    activeType === cat.title
                                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-emerald-400 hover:text-emerald-700'
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Result count */}
                    {(query || activeType) && (
                        <p className="text-stone-400 text-sm">
                            {totalResults} plant{totalResults !== 1 ? 's' : ''} found
                            {activeType ? ` in ${activeType}` : ''}
                            {query ? ` matching "${query}"` : ''}
                        </p>
                    )}
                </motion.div>

                {/* Plant List */}
                <div className="space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.length === 0 ? (
                            <motion.div
                                key="no-results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-24 text-stone-400"
                            >
                                <p className="text-lg font-light">No plants found</p>
                                <button
                                    onClick={() => { setQuery(''); setActiveType(null); }}
                                    className="mt-3 text-emerald-700 text-sm font-medium underline underline-offset-2"
                                >
                                    Clear filters
                                </button>
                            </motion.div>
                        ) : (
                            filtered.map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-8 font-serif border-b border-stone-100 pb-4 flex items-center gap-3">
                                        <FileText className="w-6 h-6 text-emerald-600" />
                                        {category.title}
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="text-stone-400 text-sm uppercase tracking-wider border-b border-stone-100">
                                                    <th className="pb-4 font-semibold w-2/3">Plant Name / Variety</th>
                                                    <th className="pb-4 font-semibold">Available Sizes</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-stone-50">
                                                {category.items.map((item, itemIdx) => (
                                                    <tr key={itemIdx} className="hover:bg-stone-50/50 transition-colors group">
                                                        <td className="py-5 text-stone-800 font-medium group-hover:text-emerald-700 transition-colors">
                                                            {item.name}
                                                        </td>
                                                        <td className="py-5 text-stone-500 font-light flex gap-2 flex-wrap">
                                                            {item.sizes.length > 0 ? item.sizes.map(size => (
                                                                <span key={size} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-medium border border-stone-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                                                    {size}
                                                                </span>
                                                            )) : (
                                                                <span className="text-stone-300 text-xs italic">Call for sizes</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
