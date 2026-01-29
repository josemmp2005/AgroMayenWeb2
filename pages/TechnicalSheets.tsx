
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowLeft, ExternalLink, Loader2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Sheet {
    id: string;
    name: string;
    url: string;
    date: string;
}

const TechnicalSheets: React.FC = () => {
    const [sheets, setSheets] = useState<Sheet[]>([]);
    const [filteredSheets, setFilteredSheets] = useState<Sheet[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchSheets();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        setFilteredSheets(
            sheets.filter(sheet =>
                sheet.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            )
        );
    }, [debouncedSearchTerm, sheets]);

    const fetchSheets = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/.netlify/functions/sheets');
            if (response.ok) {
                const data = await response.json();
                setSheets(data);
            }
        } catch (error) {
            console.error('Error fetching sheets:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
            <div className="container mx-auto px-6 py-12">
                {/* Header Navigation */}
                <div className="flex justify-between items-center mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-lime transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Volver al inicio
                    </Link>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-dark to-brand-lime bg-clip-text text-transparent mb-4"
                    >
                        Fichas de Seguridad
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        Consulta y descarga toda la documentación técnica de nuestros productos.
                        Actualizado automáticamente desde nuestro sistema central.
                    </motion.p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:ring-2 focus:ring-brand-lime/20 focus:border-brand-lime transition-all sm:text-sm shadow-sm"
                        placeholder="Buscar por nombre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-10 h-10 animate-spin text-brand-lime" />
                    </div>
                )}

                {/* Grid of Sheets */}
                {!isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredSheets.map((sheet, index) => (
                                <motion.div
                                    key={sheet.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    layout
                                    className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-shadow group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-lime group-hover:w-3 transition-all" />

                                    <div className="flex justify-between items-start mb-4 pl-3">
                                        <div className="p-3 bg-slate-50 rounded-xl text-brand-dark group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors">
                                            <FileText size={28} />
                                        </div>
                                    </div>

                                    <div className="pl-3">
                                        <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 min-h-[3.5rem]">{sheet.name}</h3>
                                        <p className="text-sm text-slate-400 mb-6">Actualizado: {sheet.date}</p>

                                        <a
                                            href={sheet.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-brand-lime font-bold hover:gap-3 transition-all group-hover:text-brand-dark"
                                        >
                                            Ver Documento <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredSheets.length === 0 && (
                            <div className="col-span-full text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-100 shadow-sm">
                                <Search size={48} className="mx-auto mb-4 text-slate-300" />
                                <h3 className="text-xl font-bold text-slate-700 mb-2">No se han encontrado resultados</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">
                                    No hemos podido encontrar ninguna ficha que coincida con "{searchTerm}".
                                    Intenta con otros términos o revisa la ortografía.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechnicalSheets;
