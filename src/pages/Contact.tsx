import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Truck } from 'lucide-react';

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`.trim(),
                    email,
                    message
                })
            });
            
            if (res.ok) {
                setStatus('success');
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                                <a href="tel:3182297462" className="flex items-start gap-4 group">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Phone</p>
                                        <p className="text-stone-900 font-semibold text-xl group-hover:text-emerald-700 transition-colors">(318) 229-7462</p>
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

                                <div className="flex items-start gap-4">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Location</p>
                                        <p className="text-stone-900 font-semibold text-xl">
                                            219 Nick Strange Rd<br />
                                            Lecompte, Louisiana 71346
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-4 rounded-full bg-emerald-50 text-emerald-700">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-stone-500 font-medium text-sm mb-1 uppercase tracking-wider">Hours</p>
                                        <div className="text-stone-900 font-semibold text-base space-y-1">
                                            <p>Mon – Fri: 8:00am – 4:30pm</p>
                                            <p>Saturday: 8:00am – 12:00pm</p>
                                            <p className="text-stone-400 font-normal">Sunday: Closed</p>
                                        </div>
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
                        {status === 'success' ? (
                            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl border border-emerald-200 mb-6">
                                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                                <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                                <button onClick={() => setStatus('idle')} className="mt-4 text-emerald-700 font-semibold hover:underline">Send another message</button>
                            </div>
                        ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-stone-700 ml-1">First Name</label>
                                    <input value={firstName} onChange={e => setFirstName(e.target.value)} required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-stone-700 ml-1">Last Name</label>
                                    <input value={lastName} onChange={e => setLastName(e.target.value)} required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-stone-700 ml-1">Email Address</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-stone-700 ml-1">Message</label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} required rows={5} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" placeholder="How can we help you?" />
                            </div>
                            
                            {status === 'error' && (
                                <p className="text-red-600 text-sm">There was an error sending your message. Please try again later.</p>
                            )}

                            <button disabled={status === 'loading'} className="w-full bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 disabled:hover:-translate-y-0 disabled:hover:shadow-lg disabled:cursor-not-allowed text-white font-semibold flex items-center justify-center py-4 rounded-xl transition-colors mt-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                            </button>
                        </form>
                        )}
                    </motion.div>
                </div>

                {/* Shipping & Handling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 bg-white p-10 rounded-[2rem] border border-stone-100"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-full bg-emerald-50 text-emerald-700">
                            <Truck className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900">Shipping &amp; Handling</h3>
                    </div>
                    <p className="text-stone-600 text-lg font-light leading-relaxed max-w-3xl">
                        We will fill your order and arrange the shipping. We do our best to fill all orders with delicacy and care. If a plant is not available, we will contact you to find a quality substitution that meets your needs. Shipping can be arranged with a dependable hauler that you trust.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
