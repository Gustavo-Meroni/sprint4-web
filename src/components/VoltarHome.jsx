import { ArrowLeft } from 'lucide-react';

function VoltarHome() {
  return (
    <button
      onClick={() => (window.location.href = '/')}
      className="flex items-center text-purple-600 hover:text-purple-800 mb-6 font-semibold text-sm"
      aria-label="Voltar para Home"
      type="button"
    >
      <ArrowLeft size={18} className="mr-2" />
      Voltar para Home
    </button>
  );
}

export default VoltarHome;
