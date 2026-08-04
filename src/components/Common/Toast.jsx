import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle size={20} style={{ color: '#25D366' }} />,
    info: <Info size={20} style={{ color: '#D4AF37' }} />,
    warning: <AlertTriangle size={20} style={{ color: '#E11D48' }} />
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999999,
        background: '#4A001E',
        color: '#FDFBF7',
        border: '1.5px solid #D4AF37',
        borderRadius: '30px',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        animation: 'fadeUp 0.3s ease',
        maxWidth: '90vw'
      }}
    >
      {icons[toast.type] || icons.success}
      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{toast.message}</span>
    </div>
  );
};
