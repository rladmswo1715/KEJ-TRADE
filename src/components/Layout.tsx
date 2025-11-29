import type { ReactNode } from 'react';
import Header from './layout/Header';
import Watchlist from './dashboard/WatchList';
import SideToolsPanel from './dashboard/SideToolsPanel';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 flex flex-col'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <aside className='hidden md:flex md:w-64 flex-col border-r border-slate-800 p-4 bg-slate-950/60'>
          <Watchlist />
        </aside>
        <main className='flex-1 flex flex-col overflow-auto p-4 gap-4'>
          {children}
        </main>
        <aside className='hidden lg:flex lg:w-60 flex-col border-l border-slate-800 p-4 bg-slate-950/60'>
          <SideToolsPanel />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
