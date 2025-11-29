const Watchlist = () => {
  const symbols = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT', 'ADA/USDT'];

  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-xs font-semibold tracking-[0.18em] text-slate-500 mb-3'>
        WATCHLIST
      </h2>

      <ul className='flex-1 space-y-1 text-sm'>
        {symbols.map((sym, idx) => (
          <li
            key={sym}
            className={`px-3 py-2 rounded-lg cursor-pointer flex items-center justify-between ${
              idx === 0
                ? 'bg-slate-800 text-slate-50'
                : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            <span>{sym}</span>
            {idx === 0 && (
              <span className='text-[10px] text-emerald-400 font-semibold'>
                +2.3%
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className='mt-4 text-xs text-slate-500'>Filters later</div>
    </div>
  );
};

export default Watchlist;
