const MainChartPanel = () => {
  return (
    <section className='bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-col min-h-80'>
      <div className='flex items-center justify-between mb-3'>
        <h3 className='text-xs font-semibold tracking-[0.18em] text-slate-500'>
          MAIN CHART
        </h3>
        <span className='text-[11px] text-slate-500'>
          Candlestick • Realtime (later)
        </span>
      </div>

      <div className='flex-1 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center justify-center'>
        <span className='text-xs text-slate-600'>Lightweight Charts</span>
      </div>
    </section>
  );
};

export default MainChartPanel;
