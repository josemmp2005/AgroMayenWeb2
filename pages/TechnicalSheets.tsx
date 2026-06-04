
import React, { useState, useEffect, useMemo } from 'react';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState<Sheet | null>(null);

    const filteredSheets = useMemo(() => {
        const query = debouncedSearchTerm.trim().toLowerCase();

        if (!query) {
            return sheets;
        }

        return sheets.filter((sheet) =>
            sheet.name.toLowerCase().includes(query)
        );
    }, [debouncedSearchTerm, sheets]);

    useEffect(() => {
        fetchSheets();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const fetchSheets = async () => {
        setIsLoading(true);
        try {
            const isLocalHost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
            const endpoints = isLocalHost
                ? [
                    '/.netlify/functions/sheets',
                    'http://127.0.0.1:3000/.netlify/functions/sheets',
                    'http://localhost:3000/.netlify/functions/sheets'
                ]
                : ['/.netlify/functions/sheets'];

            let lastError: unknown = null;

            for (const endpoint of endpoints) {
                try {
                    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
                    if (!response.ok) {
                        lastError = new Error(`HTTP ${response.status} ${response.statusText}`);
                        continue;
                    }

                    const data = await response.json();
                    setSheets(Array.isArray(data) ? data : []);
                    return;
                } catch (error) {
                    lastError = error;
                }
            }

            console.error('Failed to load sheets from all endpoints:', lastError);
        } catch (error) {
            console.error('Error fetching sheets:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7f2]">
            <div className="container mx-auto px-6 py-12">
                {/* Header Navigation */}
                <div className="flex justify-between items-center mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-dark transition-colors font-semibold"
                    >
                        <ArrowLeft size={18} />
                        Volver al inicio
                    </Link>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-brand-dark font-outfit mb-4 tracking-tight"
                    >
                        Fichas de Seguridad
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-warm-gray text-base max-w-2xl mx-auto font-dm"
                    >
                        Consulta y descarga toda la documentación técnica de nuestros productos.
                        Actualizado de forma oficial para cumplir con la normativa vigente.
                    </motion.p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:ring-1 focus:ring-brand-dark focus:border-brand-dark transition-all sm:text-sm shadow-sm text-brand-dark font-medium"
                        placeholder="Buscar producto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-brand-dark" />
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
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-leaf group-hover:bg-brand-dark transition-colors" />
 
                                    <div className="flex justify-between items-start mb-4 pl-3">
                                        <div className="p-3 bg-slate-50 border border-stone-200/60 rounded-xl text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                                        </div>
                                    </div>
 
                                    <div className="pl-3">
                                        <h3 className="text-xl font-bold text-brand-dark mb-2 line-clamp-2 min-h-[3rem] tracking-tight">{sheet.name}</h3>
                                        <p className="text-xs text-warm-gray mb-6">Actualizado: {sheet.date}</p>
 
                                        <a
                                            href={sheet.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-brand-leaf hover:text-brand-dark font-bold transition-all"
                                        >
                                            Ver Ficha Técnica <ExternalLink size={14} />
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
