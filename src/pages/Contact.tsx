import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <main className="pt-32 pb-24 min-h-screen bg-stone-100 film-grain">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
                        Get in <span className="font-serif italic text-emerald-700">Touch</span>
                    </h1>
                    <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
                        For wholesale inquiries, availability, or to schedule a nursery visit, please reach out to our team.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10"
                    >
                        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-4">Contact Details</h3>

                            <div className="space-y-8">
                                <a href="tel:3187765103" className="flex items-start gap-4 group">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Phone</p>
                                        <p className="text-stone-900 font-semibold text-xl group-hover:text-emerald-700 transition-colors">(318) 776-5103</p>
                                    </div>
                                </a>

                                <a href="mailto:rsrnursery@yahoo.com" className="flex items-start gap-4 group">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Email</p>
                                        <p className="text-stone-900 font-semibold text-lg group-hover:text-emerald-700 transition-colors">rsrnursery@yahoo.com</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Location</p>
                                        <p className="text-stone-900 font-semibold text-xl">
                                            10350 Highway 71 South<br />
                                            Lecompte, Louisiana 71346
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-stone-100"
                    >
                        <h3 className="text-3xl font-bold text-stone-900 mb-8 font-serif italic">Send an Inquiry</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-stone-700 ml-1">First Name</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-stone-700 ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-stone-700 ml-1">Email Address</label>
                                <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-stone-700 ml-1">Message</label>
                                <textarea rows={5} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" placeholder="How can we help you?" />
                            </div>
                            <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold flex items-center justify-center py-4 rounded-xl transition-colors mt-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                                Submit Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
