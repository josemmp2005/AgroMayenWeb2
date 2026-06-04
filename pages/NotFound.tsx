
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Leaf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-stone-50 flex flex-col pt-20">
            <Header />

            <main className="flex-grow flex items-center justify-center p-6 bg-stone-50 relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
                    <Leaf className="w-96 h-96 absolute top-10 right-10 rotate-12" />
                    <Leaf className="w-64 h-64 absolute bottom-10 left-10 -rotate-45" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md w-full text-center relative z-10"
                >
                    <div className="mb-8">
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2
                            }}
                            className="inline-block p-6 rounded-3xl bg-brand-dark/10 text-brand-dark mb-4"
                        >
                            <span className="text-8xl font-comfortaa font-bold">404</span>
                        </motion.div>
                    </div>

                    <h1 className="text-3xl font-comfortaa font-bold text-slate-800 mb-4 tracking-tight">
                        Página no encontrada
                    </h1>

                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Parece que la tierra bajo tus pies ha cambiado. Esta página no existe o ha sido movida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-xl font-semibold shadow-lg shadow-brand-dark/20 hover:bg-slate-800 transition-all active:scale-95"
                        >
                            <Home className="w-5 h-5" />
                            Volver al Inicio
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Regresar
                        </button>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
