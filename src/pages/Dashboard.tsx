import MainChartPanel from '../components/dashboard/MainChartPanel';
import TimeframeBar from '../components/dashboard/TimeframeBar';
import VolumePanel from '../components/dashboard/VolumePanel';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TimeframeBar />

      <MainChartPanel />

      <VolumePanel />
    </div>
  );
};

export default Dashboard;
