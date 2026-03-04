import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Star, GripHorizontal } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function Reviews() {
    const reviews = [
        {
            text: "The knowledge of the owners and the manner in which they render that knowledge is so sincere. It's just a pleasure to visit the Southern Roots Nursery.",
            author: "Sabina A. Miller"
        },
        {
            text: "Was looking for cajun hibiscus plants and saw Southern Roots was a retail outlet for them. Was very happy with the plants I purchased and would really recommend them. The plants are well cared for and in great shape.",
            author: "Shaun Authement"
        },
        {
            text: "They have beautiful flowers and their prices are reasonable. They are very friendly and helpful and will answer any question that you ask if they can. My flowers always look beautiful.",
            author: "Linda Shyen Hebert"
        },
        {
            text: "I called inquiring about a specific tree and they were so helpful and informative. The level of customer service is truly exceptional. We will definitely be back.",
            author: "Sarah J."
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    // Recalculate width on resize to ensure drag constraints are always accurate
    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
            }
        };

        // Initial calculation
        calculateWidth();

        // Recalculate if fonts loaded or window resized
        window.addEventListener('resize', calculateWidth);
        const resizeObserver = new ResizeObserver(calculateWidth);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener('resize', calculateWidth);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <section id="reviews" className="py-32 bg-stone-50 overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase">
                            Testimonials
                        </h2>
                        <GripHorizontal className="w-4 h-4 text-stone-300" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                        Client Experiences
                    </h3>
                    <p className="text-stone-500 font-light">Drag to explore what our clients say.</p>
                </motion.div>
            </div>

            <div className="pl-4 sm:pl-6 lg:pl-8 ml-auto max-w-[100vw]">
                <motion.div
                    ref={containerRef}
                    className="flex gap-8 px-4 sm:px-6 lg:px-8 pb-12 w-max"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width - 64 }}
                    whileTap={{ cursor: "grabbing" }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="w-[300px] md:w-[450px] bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl border border-stone-100 flex flex-col transition-all duration-700 flex-shrink-0 origin-left"
                            whileHover={{
                                scale: 1.02,
                                rotateY: -2,
                                rotateX: 2,
                                y: -5
                            }}
                            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                        >
                            <div className="flex gap-1 text-emerald-600 mb-8 z-10">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-stone-600 mb-10 text-lg flex-grow font-serif italic leading-relaxed z-10 selection:bg-emerald-100">"{review.text}"</p>
                            <div className="flex items-center gap-4 border-t border-stone-100 pt-6 z-10">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold uppercase text-sm border border-emerald-100">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="font-semibold text-stone-900 tracking-wide">{review.author}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
