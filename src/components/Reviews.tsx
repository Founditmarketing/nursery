import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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
        }
    ];

    return (
        <section id="reviews" className="py-32 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-4">
                        Testimonials
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                        Client Experiences
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl border border-stone-100 flex flex-col transition-shadow duration-500"
                        >
                            <div className="flex gap-1 text-emerald-600 mb-8">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-stone-600 mb-10 text-lg flex-grow font-serif italic leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold uppercase text-sm">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="font-semibold text-stone-900 tracking-wide">{review.author}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
