const DashboardHeader = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Container esquerda: Cadastrar, Dashboard, Adicionar Paciente */}
      <nav className="flex space-x-8 font-semibold text-gray-600">
        <button type="button" disabled className="cursor-default opacity-50">
          Cadastrar
        </button>

        <button
          type="button"
          className="text-purple-700 border-b-2 border-purple-700"
        >
          Dashboard
        </button>

        <button type="button" disabled className="cursor-default opacity-50">
          Adicionar Paciente
        </button>
      </nav>

      {/* Container direita: Perfil */}
      <div>
        <button type="button" disabled className="cursor-default opacity-50">
          Perfil
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
