const TimeframeBar = () => {
  const intervals = ['1m', '5m', '15m', '1h'];

  return (
    <div className='flex items-center justify-between border-b border-slate-800 pb-2'>
      <div className='flex items-baseline gap-2'>
        <span className='text-lg font-semibold'>BTC/USDT</span>
        <span className='text-xs text-slate-400 hidden sm:inline'>
          Binance • Spot
        </span>
      </div>

      <div className='flex items-center gap-2 text-xs sm:text-sm'>
        {intervals.map((itv, idx) => (
          <button
            key={itv}
            className={`px-2 py-1 rounded-md border text-xs sm:text-sm ${
              idx === 0
                ? 'border-sky-500 text-sky-400 bg-sky-500/10'
                : 'border-transparent text-slate-300 hover:border-slate-600 hover:bg-slate-800'
            }`}
          >
            {itv}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeframeBar;
