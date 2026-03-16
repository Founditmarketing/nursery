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

    interface CategoryData {
        title: string;
        img: string;
        description: string;
        items?: CategoryItem[];
    }

    const categoriesData: Record<string, CategoryData> = {
        'ground-cover': { 
            title: 'Ground Cover', 
            img: '/images/Screen-Shot-2020-05-18-at-8.19.54-PM-2.png',
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
            ]
        },
        'azaleas': { 
            title: 'Azaleas', 
            img: '/images/Screen-Shot-2020-08-11-at-10.30.49-AM.png',
            description: 'Vibrant, blooming shrubs perfect for adding dramatic color to southern gardens.' 
        },
        'juniper': { 
            title: 'Juniper', 
            img: '/images/juniper-spiral.jpeg',
            description: 'Hardy evergreen shrubs ideal for borders, accents, and ground coverage.' 
        },
        'ornamental-grass': { 
            title: 'Ornamental Grass', 
            img: '/images/grass-boxwood.jpeg',
            description: 'Add texture, movement, and graceful structure to your landscape.' 
        },
        'boxwood': { 
            title: 'Boxwood', 
            img: '/images/Screen-Shot-2020-08-11-at-10.29.11-AM.png',
            description: 'Classic, dense evergreen shrubs perfect for formal hedges and topiary designs.' 
        },
        'ligustrum': { 
            title: 'Ligustrum', 
            img: '/images/Screen-Shot-2020-08-11-at-10.28.36-AM.png',
            description: 'Fast-growing evergreen shrubs that excel as privacy screens and hedges.' 
        },
        'perennials': { 
            title: 'Perennials', 
            img: '/images/shrubs-palms.jpeg',
            description: 'Reliable plants that return year after year, providing continuous seasonal interest.' 
        },
        'gardenia': { 
            title: 'Gardenia', 
            img: '/images/Screen-Shot-2020-08-11-at-10.27.15-AM.png',
            description: 'Beloved for their intoxicating fragrance and elegant, contrasting white blooms.' 
        },
        'trees': { 
            title: 'Trees', 
            img: '/images/juniper-rows.jpeg',
            description: 'Establish the structural footprint of your landscape with our premium trees.' 
        },
        'abelia': { 
            title: 'Abelia', 
            img: '/images/Screen-Shot-2020-08-11-at-11.18.48-AM.png',
            description: 'Graceful, arching shrubs offering long-lasting blooms and attractive foliage.' 
        },
        'hollies': { 
            title: 'Hollies', 
            img: '/images/Screen-Shot-2020-06-03-at-5.09.11-PM.png',
            description: 'Durable, versatile evergreens that provide excellent structure and winter interest.' 
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-stone-100 text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-serif text-emerald-800 mb-6">Explore Our {category.title}</h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-10">
                        Our full availability of {category.title.toLowerCase()} changes frequently. For the most up-to-date sizes, varieties, and pricing, please review our comprehensive plant catalog.
                    </p>
                    
                    <Link 
                        to="/plant-list"
                        className="inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] group"
                    >
                        View Full Availabilty List
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
