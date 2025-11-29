const Header = () => {
  return (
    <header className='h-14 px-6 flex items-center justify-between border-b border-slate-800 bg-slate-950/90'>
      <div className='flex items-center gap-2'>
        <div className='w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center'>
          <span className='text-sky-400 text-sm'>📈</span>
        </div>
        <div className='flex flex-col leading-tight'>
          <span className='font-semibold text-sm sm:text-base'>KEJ-TRADE</span>
          <span className='text-[10px] sm:text-xs text-slate-400'>
            Trading Dashboard
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
