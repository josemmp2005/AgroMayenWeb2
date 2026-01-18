import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Trash2, Edit2, LogOut, ArrowLeft, X, ExternalLink, Loader2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currentUser, logout, initAuth, onLogin, onLogout, close } from '../lib/auth';

interface Sheet {
    id: number;
    name: string;
    url: string;
    date: string;
    created_at?: string;
}

const TechnicalSheets: React.FC = () => {
    const [sheets, setSheets] = useState<Sheet[]>([]);
    const [filteredSheets, setFilteredSheets] = useState<Sheet[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState<any>(null);
    // Form and loading states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [currentSheet, setCurrentSheet] = useState<Partial<Sheet>>({});

    useEffect(() => {
        initAuth();
        close(); // Safety close
        setUser(currentUser());

        onLogin((u) => setUser(u));
        onLogout(() => setUser(null));

        fetchSheets();
    }, []);

    useEffect(() => {
        setFilteredSheets(
            sheets.filter(sheet =>
                sheet.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, sheets]);

    const fetchSheets = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/.netlify/functions/sheets');
            if (response.ok) {
                const data = await response.json();
                // Map created_at to date if needed for display, or just use date
                const formatted = data.map((item: any) => ({
                    ...item,
                    date: new Date(item.created_at || item.date).toISOString().split('T')[0]
                }));
                setSheets(formatted);
            }
        } catch (error) {
            console.error('Error fetching sheets:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
    };

    const getAuthHeaders = () => {
        const token = user?.token?.access_token;
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentSheet.name || !currentSheet.url) return;
        setIsSaving(true);

        try {
            if (currentSheet.id) {
                // Update (PUT)
                const response = await fetch('/.netlify/functions/sheets', {
                    method: 'PUT',
                    headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
                    body: JSON.stringify(currentSheet)
                });
                if (response.ok) fetchSheets();
            } else {
                // Create (POST)
                const response = await fetch('/.netlify/functions/sheets', {
                    method: 'POST',
                    headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
                    body: JSON.stringify(currentSheet)
                });
                if (response.ok) fetchSheets();
            }
            setIsFormOpen(false);
            setCurrentSheet({});
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error al guardar. Verifica tu conexión.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('¿Estás seguro de que deseas eliminar esta ficha técnica?')) return;

        try {
            const response = await fetch('/.netlify/functions/sheets', {
                method: 'DELETE',
                headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            if (response.ok) fetchSheets();
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    const openEdit = (sheet: Sheet) => {
        setCurrentSheet(sheet);
        setIsFormOpen(true);
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

                    <div>
                        {user && (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-emerald-600 font-bold bg-emerald-100 px-3 py-1 rounded-full">
                                    Admin: {user.email}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
                                >
                                    <LogOut size={18} />
                                    Salir
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Page Title */}
                <div className="text-center mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-dark to-brand-lime bg-clip-text text-transparent mb-4"
                    >
                        Fichas Técnicas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        Consulta y descarga la documentación técnica de nuestros productos.
                        Información detallada para el mejor rendimiento de tus cultivos.
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

                {/* Action Button (Admin) */}
                {user && (
                    <div className="flex justify-center mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setCurrentSheet({}); setIsFormOpen(true); }}
                            className="flex items-center gap-2 bg-brand-lime text-brand-dark px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-brand-lime/20 transition-all"
                        >
                            <Plus size={24} />
                            Nueva Ficha Técnica
                        </motion.button>
                    </div>
                )}

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
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                    layout
                                    className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-shadow group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-lime group-hover:w-3 transition-all" />

                                    <div className="flex justify-between items-start mb-4 pl-3">
                                        <div className="p-3 bg-slate-50 rounded-xl text-brand-dark group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors">
                                            <FileText size={28} />
                                        </div>
                                        {user && (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => openEdit(sheet)}
                                                    className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(sheet.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        )}
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
                            <div className="col-span-full text-center py-20 text-slate-400">
                                <FileText size={48} className="mx-auto mb-4 opacity-50" />
                                <p>No se encontraron fichas que coincidan con tu búsqueda.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Create/Edit Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-slate-800">
                                    {currentSheet.id ? 'Editar Ficha' : 'Nueva Ficha Técnica'}
                                </h2>
                                <button onClick={() => setIsFormOpen(false)} className="text-slate-400 hover:text-slate-600">
                                    <X />
                                </button>
                            </div>

                            <form onSubmit={handleSave} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-1">Nombre del Documento</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition-all"
                                        value={currentSheet.name || ''}
                                        onChange={(e) => setCurrentSheet({ ...currentSheet, name: e.target.value })}
                                        placeholder="Ej: Ficha de Seguridad 2024"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-1">Enlace (Google Drive / PDF)</label>
                                    <input
                                        type="url"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition-all"
                                        value={currentSheet.url || ''}
                                        onChange={(e) => setCurrentSheet({ ...currentSheet, url: e.target.value })}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsFormOpen(false)}
                                        className="flex-1 py-3 rounded-xl font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="flex-1 bg-brand-lime text-brand-dark py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
                                    >
                                        {isSaving ? 'Guardando...' : 'Guardar'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TechnicalSheets;

