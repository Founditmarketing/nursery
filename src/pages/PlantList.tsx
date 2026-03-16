import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export default function PlantList() {
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
