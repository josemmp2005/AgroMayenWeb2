import React, { useEffect, useState } from 'react';
import { initAuth, login, logout, currentUser, onLogin, onLogout, close } from '../lib/auth';
import { Shield, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
    const [user, setUser] = useState(currentUser());
    const navigate = useNavigate();

    useEffect(() => {
        // Debug
        // console.log('AdminLogin Mounted');

        initAuth();
        onLogin((user: any) => {
            console.log('Login callback fired', user);
            setUser(user);

            // Wait a moment for widget animation/state to complete, then close and navigate
            setTimeout(() => {
                close();
                navigate('/fichas-tecnicas');
            }, 500);
        });
        onLogout(() => {
            setUser(null);
        });

        // Auto-open login if not authenticated
        if (!currentUser()) {
            // login(); 
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-brand-lime/20 rounded-full">
                        <Shield className="w-12 h-12 text-brand-dark" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-slate-800 mb-2">Acceso Administrativo</h1>
                <p className="text-slate-500 mb-8">Esta área es restringida. Por favor, inicia sesión.</p>

                {!user ? (
                    <button
                        onClick={() => {
                            console.log('Login button clicked');
                            login();
                        }}
                        className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-brand-lime/20"
                    >
                        Iniciar Sesión con Netlify
                    </button>
                ) : (
                    <div>
                        <p className="mb-4 text-emerald-600 font-medium">¡Sesión iniciada como {user.email}!</p>
                        <button
                            onClick={() => logout()}
                            className="flex items-center justify-center gap-2 w-full border border-red-200 text-red-500 py-3 rounded-xl font-bold hover:bg-red-50 transition-all"
                        >
                            <LogOut size={18} />
                            Cerrar Sesión
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;
