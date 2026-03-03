import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export default function PlantList() {
    const listCategories = [
        {
            title: "Premium Shrubs",
            items: [
                { name: "Azalea 'Fashion'", sizes: ["1 Gal", "3 Gal", "7 Gal"] },
                { name: "Azalea 'George Taber'", sizes: ["3 Gal", "7 Gal"] },
                { name: "Boxwood 'Wintergem'", sizes: ["1 Gal", "3 Gal"] },
                { name: "Cleyera Japonica", sizes: ["3 Gal", "7 Gal", "15 Gal"] },
                { name: "Gardenia 'August Beauty'", sizes: ["3 Gal", "7 Gal"] },
            ]
        },
        {
            title: "Trees & Accents",
            items: [
                { name: "Crape Myrtle 'Natchez'", sizes: ["15 Gal", "30 Gal"] },
                { name: "Live Oak", sizes: ["15 Gal", "30 Gal", "45 Gal"] },
                { name: "Magnolia 'Little Gem'", sizes: ["15 Gal", "30 Gal"] },
                { name: "Ornamental Grass (Assorted)", sizes: ["1 Gal", "3 Gal"] },
                { name: "Juniper 'Blue Pacific'", sizes: ["1 Gal", "3 Gal"] },
            ]
        }
    ];

    return (
        <main className="pt-32 pb-24 min-h-screen bg-stone-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
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
                        href="/PlantList.pdf" // Placeholder for their actual PDF
                        onClick={(e) => { e.preventDefault(); alert("PDF Download would initiate here."); }}
                        className="inline-flex items-center justify-center gap-3 bg-stone-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-xl"
                    >
                        <Download className="w-5 h-5" /> Download Full PDF List
                    </motion.a>
                </motion.div>

                <div className="space-y-12">
                    {listCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                                                    {item.sizes.map(size => (
                                                        <span key={size} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-medium border border-stone-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                                            {size}
                                                        </span>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
