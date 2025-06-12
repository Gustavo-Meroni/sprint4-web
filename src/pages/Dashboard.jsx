import DashboardHeader from '../components/DashboardHeader';
import HeartRateChart from '../components/HeartRateChart';

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <main className="pt-16 p-6">
        <HeartRateChart />
      </main>
    </div>
  );
}
