import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function CategoryPage() {
    const { id } = useParams<{ id: string }>();

    // Mapping category IDs to their specific display data
    // In a real application, this would come from an API or central data store.
    interface CategoryItem {
        name: string;
        img: string;
    }

    interface Variety {
        name: string;
        sizes: string;
    }

    interface CategoryData {
        title: string;
        img: string;
        description: string;
        items?: CategoryItem[];
        varieties?: Variety[];
    }

    const categoriesData: Record<string, CategoryData> = {
        'ground-cover': {
            title: 'Ground Cover',
            img: '/images/inventory_ground_cover.png',
            description: 'Provide an elegant, low-maintenance foundation for your landscape design.',
            items: [
                { name: 'Aspidistria', img: '/images/ground-cover/aspidistria.jpg' },
                { name: 'Giant Liriope', img: '/images/ground-cover/giant_liriope.jpg' },
                { name: 'Green Liriope', img: '/images/ground-cover/green_liriope.jpg' },
                { name: 'Jasmine Asian', img: '/images/ground-cover/jasmine_asian.jpg' },
                { name: 'Mondo Dwarf', img: '/images/ground-cover/mondo_dwarf.jpg' },
                { name: 'Mondo Regular', img: '/images/ground-cover/mondo_regular.jpg' },
                { name: 'V. Liriope', img: '/images/ground-cover/v_liriope.jpg' },
                { name: 'Super Blue', img: '/images/ground-cover/super_blue.jpg' },
            ],
            varieties: [
                { name: 'Aspidistria', sizes: '1 Gallon, 3 Gallon' },
                { name: 'Giant Liriope', sizes: '1 Gallon, 3 Gallon' },
                { name: 'Green Liriope', sizes: '4 Inch, 1 Gallon' },
                { name: 'Jasmine Asian', sizes: '4 Inch, 1 Gallon' },
                { name: 'Mondo Dwarf', sizes: '4 Inch, 1 Gallon' },
                { name: 'Mondo Regular', sizes: '4 Inch, 1 Gallon' },
                { name: 'V. Liriope', sizes: '4 Inch, 1 Gallon' },
                { name: 'Super Blue', sizes: '1 Gallon, 3 Gallon' },
            ]
        },
        'azaleas': {
            title: 'Azaleas',
            img: '/images/inventory_azalea.png',
            description: 'Vibrant, blooming shrubs perfect for adding dramatic color to southern gardens.',
            varieties: [
                { name: 'George Tabor', sizes: '3 Gallon' },
                { name: 'Lavender Formosa', sizes: '3 Gallon, 7 Gallon' },
                { name: 'Boxwood Shrub', sizes: '3 Gallon' },
                { name: 'Carissa', sizes: '3 Gallon' },
            ]
        },
        'juniper': {
            title: 'Juniper',
            img: '/images/inventory_juniper.png',
            description: 'Hardy evergreen shrubs ideal for borders, accents, and ground coverage.',
        },
        'ornamental-grass': {
            title: 'Ornamental Grass',
            img: '/images/inventory_ornamental_grass.png',
            description: 'Add texture, movement, and graceful structure to your landscape.',
            varieties: [
                { name: 'Adagio', sizes: '3 Gallon' },
                { name: 'Miscanthus Regular', sizes: '3 Gallon' },
                { name: 'Miscanthus Variegated', sizes: '3 Gallon' },
                { name: 'Mexican Feather', sizes: '3 Gallon' },
                { name: 'Big Blue', sizes: '3 Gallon' },
                { name: 'Muhly Pink', sizes: '3 Gallon' },
            ]
        },
        'boxwood': {
            title: 'Boxwood',
            img: '/images/inventory_boxwood.png',
            description: 'Classic, dense evergreen shrubs perfect for formal hedges and topiary designs.',
            varieties: [
                { name: 'Wintergreen', sizes: '15 Gallon' },
            ]
        },
        'ligustrum': {
            title: 'Ligustrum',
            img: '/images/inventory_ligustrum.png',
            description: 'Fast-growing evergreen shrubs that excel as privacy screens and hedges.',
            varieties: [
                { name: 'Gold Dust Acuba', sizes: '3 Gallon' },
                { name: 'Japanese Yew', sizes: '3 Gallon' },
                { name: 'Eleagnus', sizes: '3 Gallon, 7 Gallon' },
                { name: 'Cleyera', sizes: '7 Gallon' },
                { name: 'Dwarf Palmetto', sizes: '3 Gallon' },
                { name: 'Dwarf Wax Myrtle', sizes: '3 Gallon' },
                { name: 'Howardi Ligustrum', sizes: '3 Gallon' },
                { name: 'Shi Shi', sizes: '15 Gallon' },
                { name: 'Sweet Olive', sizes: '3 Gallon' },
                { name: 'Variegated Privet', sizes: '15 Gallon' },
            ]
        },
        'perennials': {
            title: 'Perennials',
            img: '/images/inventory_perennials.png',
            description: 'Reliable plants that return year after year, providing continuous seasonal interest.',
            varieties: [
                { name: 'Mexican Bush Sage', sizes: '3 Gallon' },
                { name: 'Agapanthus Blue', sizes: '1 Gallon, 3 Gallon' },
                { name: 'Fox Tail Fern', sizes: '1 Gallon, 3 Gallon' },
                { name: 'Iris Bi-Color', sizes: '3 Gallon' },
                { name: 'Lantana Lavender', sizes: '1 Gallon' },
                { name: 'Lantana Red', sizes: '1 Gallon' },
                { name: 'Lantana Yellow', sizes: '1 Gallon' },
                { name: 'Rosemary Upright', sizes: '3 Gallon' },
                { name: 'Salvia Greggii', sizes: '15 Gallon' },
            ]
        },
        'gardenia': {
            title: 'Gardenia',
            img: '/images/inventory_gardenia.png',
            description: 'Beloved for their intoxicating fragrance and elegant, contrasting white blooms.',
        },
        'trees': {
            title: 'Trees',
            img: '/images/inventory_trees.png',
            description: 'Establish the structural footprint of your landscape with our premium trees.',
            varieties: [
                { name: 'Little Jem Magnolia', sizes: '15 Gallon' },
                { name: 'Natchez Crape Myrtle', sizes: '15 Gallon' },
                { name: 'Loquat', sizes: '15 Gallon' },
                { name: 'Live Oak', sizes: '15 Gallon' },
            ]
        },
        'abelia': {
            title: 'Abelia',
            img: '/images/inventory_abelia.png',
            description: 'Graceful, arching shrubs offering long-lasting blooms and attractive foliage.',
            varieties: [
                { name: 'Glossy Abelia', sizes: 'Call for availability' },
                { name: 'Edward Goucher', sizes: '3 Gallon' },
            ]
        },
        'hollies': {
            title: 'Hollies',
            img: '/images/inventory_hollies.png',
            description: 'Durable, versatile evergreens that provide excellent structure and winter interest.',
            varieties: [
                { name: 'Needle Point', sizes: '3 Gallon' },
                { name: 'Oak Leaf Holly', sizes: '15 Gallon' },
                { name: 'Sky Pencil', sizes: '3 Gallon' },
                { name: 'Nellie R. Stevens', sizes: '15 Gallon' },
                { name: 'Coned Compacta Holly', sizes: '3 Gallon' },
            ]
        },
    };

    const category = id ? categoriesData[id] : null;

    if (!category) {
        return (
            <main className="min-h-screen pt-32 pb-24 bg-stone-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl text-stone-800 font-serif mb-4">Category Not Found</h1>
                    <Link to="/#catalog" className="text-emerald-700 hover:underline">Return to Inventory</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50 pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full bg-stone-900 overflow-hidden flex items-end">
                <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={category.img} 
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Link to="/#catalog" className="inline-flex items-center text-stone-300 hover:text-white transition-colors mb-6 text-sm tracking-widest uppercase pb-1 border-b border-transparent hover:border-white w-max">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Inventory
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                            {category.title}
                        </h1>
                        <p className="text-xl text-stone-200 font-light max-w-2xl text-shadow-sm">
                            {category.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">

                {/* Variety List */}
                {category.varieties && category.varieties.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100"
                    >
                        <h2 className="text-2xl font-bold text-stone-900 mb-2">Available Varieties</h2>
                        <p className="text-stone-500 font-light mb-8 text-sm">Call <a href="tel:3182297462" className="text-emerald-700 hover:underline">(318) 229-7462</a> or <a href="mailto:rsrnursery@yahoo.com" className="text-emerald-700 hover:underline">email us</a> for current pricing and availability.</p>
                        <div className="divide-y divide-stone-100">
                            {category.varieties.map((v, i) => (
                                <motion.div
                                    key={v.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                                    className="flex items-center justify-between py-4 group"
                                >
                                    <span className="font-medium text-stone-800 group-hover:text-emerald-700 transition-colors">{v.name}</span>
                                    <span className="text-sm text-stone-400 bg-stone-50 px-3 py-1 rounded-full border border-stone-100">{v.sizes}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-stone-100 text-center"
                >
                    <h2 className="text-3xl font-serif text-emerald-800 mb-6">Explore Our {category.title}</h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-10">
                        {category.varieties
                            ? `Availability and sizing for our ${category.title.toLowerCase()} changes seasonally. For the most current stock and pricing, view our full plant list or reach out directly.`
                            : `Our full availability of ${category.title.toLowerCase()} changes frequently. For the most up-to-date sizes, varieties, and pricing, please review our comprehensive plant catalog.`
                        }
                    </p>
                    <Link
                        to="/plant-list"
                        className="inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] group"
                    >
                        View Full Availability List
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
