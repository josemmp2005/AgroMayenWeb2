import React from 'react';

interface PDFViewerProps {
    url?: string;
    title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, title }) => {
    if (!url) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                <div className="text-center">
                    <p className="font-medium mb-2">Selecciona una ficha técnica para previsualizarla</p>
                    <p className="text-sm">La vista previa se cargará aquí.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 bg-gray-50">
                <div className="text-sm text-slate-700 font-semibold truncate">{title}</div>
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-brand-leaf hover:text-brand-dark font-medium"
                >
                    Abrir en nueva pestaña
                </a>
            </div>

            <div className="w-full h-[70vh] md:h-[80vh]">
                <iframe
                    title={title || 'PDF Preview'}
                    src={url}
                    className="w-full h-full"
                    frameBorder={0}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default PDFViewer;
