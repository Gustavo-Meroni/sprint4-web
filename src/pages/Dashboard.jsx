import DashboardHeader from '../components/DashboardHeader';

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <main className="pt-16 p-6">
        <h2 className="text-xl font-bold">Conteúdo do Dashboard</h2>
        {/* resto do conteúdo */}
      </main>
    </div>
  );
}
