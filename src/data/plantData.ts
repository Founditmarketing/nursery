export interface Variety {
    name: string;
    sizes: string;
}

export interface CategoryItem {
    name: string;
    img: string;
}

export interface Category {
    id: string;
    name: string;
    img: string;
    description: string;
    varieties?: Variety[];
    items?: CategoryItem[];
}

export const categories: Category[] = [
    {
        id: 'ground-cover',
        name: 'Ground Cover',
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
        ],
    },
    {
        id: 'azaleas',
        name: 'Azaleas',
        img: '/images/inventory_azalea.png',
        description: 'Vibrant, blooming shrubs perfect for adding dramatic color to southern gardens.',
        varieties: [
            { name: 'George Tabor', sizes: '3 Gallon' },
            { name: 'Lavender Formosa', sizes: '3 Gallon, 7 Gallon' },
            { name: 'Boxwood Shrub', sizes: '3 Gallon' },
            { name: 'Carissa', sizes: '3 Gallon' },
        ],
    },
    {
        id: 'juniper',
        name: 'Juniper',
        img: '/images/inventory_juniper.png',
        description: 'Hardy evergreen shrubs ideal for borders, accents, and ground coverage.',
    },
    {
        id: 'ornamental-grass',
        name: 'Ornamental Grass',
        img: '/images/inventory_ornamental_grass.png',
        description: 'Add texture, movement, and graceful structure to your landscape.',
        varieties: [
            { name: 'Adagio', sizes: '3 Gallon' },
            { name: 'Miscanthus Regular', sizes: '3 Gallon' },
            { name: 'Miscanthus Variegated', sizes: '3 Gallon' },
            { name: 'Mexican Feather', sizes: '3 Gallon' },
            { name: 'Big Blue', sizes: '3 Gallon' },
            { name: 'Muhly Pink', sizes: '3 Gallon' },
        ],
    },
    {
        id: 'boxwood',
        name: 'Boxwood',
        img: '/images/inventory_boxwood.png',
        description: 'Classic, dense evergreen shrubs perfect for formal hedges and topiary designs.',
        varieties: [
            { name: 'Wintergreen', sizes: '15 Gallon' },
        ],
    },
    {
        id: 'ligustrum',
        name: 'Ligustrum',
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
        ],
    },
    {
        id: 'perennials',
        name: 'Perennials',
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
        ],
    },
    {
        id: 'gardenia',
        name: 'Gardenia',
        img: '/images/inventory_gardenia.png',
        description: 'Beloved for their intoxicating fragrance and elegant, contrasting white blooms.',
    },
    {
        id: 'trees',
        name: 'Trees',
        img: '/images/inventory_trees.png',
        description: 'Establish the structural footprint of your landscape with our premium trees.',
        varieties: [
            { name: 'Little Jem Magnolia', sizes: '15 Gallon' },
            { name: 'Natchez Crape Myrtle', sizes: '15 Gallon' },
            { name: 'Loquat', sizes: '15 Gallon' },
            { name: 'Live Oak', sizes: '15 Gallon' },
        ],
    },
    {
        id: 'abelia',
        name: 'Abelia',
        img: '/images/inventory_abelia.png',
        description: 'Graceful, arching shrubs offering long-lasting blooms and attractive foliage.',
        varieties: [
            { name: 'Glossy Abelia', sizes: 'Call for availability' },
            { name: 'Edward Goucher', sizes: '3 Gallon' },
        ],
    },
    {
        id: 'hollies',
        name: 'Hollies',
        img: '/images/inventory_hollies.png',
        description: 'Durable, versatile evergreens that provide excellent structure and winter interest.',
        varieties: [
            { name: 'Needle Point', sizes: '3 Gallon' },
            { name: 'Oak Leaf Holly', sizes: '15 Gallon' },
            { name: 'Sky Pencil', sizes: '3 Gallon' },
            { name: 'Nellie R. Stevens', sizes: '15 Gallon' },
            { name: 'Coned Compacta Holly', sizes: '3 Gallon' },
        ],
    },
];
