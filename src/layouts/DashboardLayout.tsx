import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0b0e14] text-gray-200">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
