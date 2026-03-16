import { Leaf, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer id="contact" className="bg-stone-950 text-stone-400 py-24 border-t border-stone-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-8 group cursor-pointer w-fit" onClick={() => window.scrollTo(0, 0)}>
                            <img
                                src="/images/logo.png"
                                alt="RoxAnne's Southern Roots Nursery"
                                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 opacity-90 hover:opacity-100"
                            />
                        </div>
                        <p className="max-w-md mb-10 leading-relaxed font-light text-stone-500 text-lg">
                            Louisiana based wholesale nursery serving designers, architects, landscape contractors, and retail customers with exceptional plant material.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center hover:bg-emerald-800 hover:border-emerald-700 hover:text-white transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Contact Us</h4>
                        <ul className="space-y-6">
                            <li>
                                <a href="mailto:rsrnursery@yahoo.com" className="flex items-start gap-4 hover:text-emerald-400 transition-colors group">
                                    <Mail className="w-5 h-5 shrink-0 mt-0.5 text-stone-600 group-hover:text-emerald-500 transition-colors" />
                                    <span className="font-light">rsrnursery@yahoo.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-stone-600" />
                                    <span className="font-light leading-relaxed text-stone-400">Lecompte, Louisiana<br />Serving LA &amp; Surrounding States</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-4">
                                    <span className="text-stone-600 shrink-0 mt-0.5">🕐</span>
                                    <span className="font-light leading-relaxed text-stone-400">
                                        Mon–Fri: 8am–4:30pm<br />
                                        Sat: 8am–12pm<br />
                                        Sun: Closed
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
                        <ul className="space-y-4 font-light text-stone-500">
                            {[
                                { label: 'About Us', to: '/about' },
                                { label: 'Plant Catalog', to: '/catalog' },
                                { label: 'Plant List', to: '/plant-list' },
                                { label: 'Gallery', to: '/gallery' },
                                { label: 'Contact Us', to: '/contact' },
                            ].map(({ label, to }) => (
                                <li key={label}>
                                    <Link to={to} className="hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-600 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} RoxAnne's Southern Roots Nursery. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
