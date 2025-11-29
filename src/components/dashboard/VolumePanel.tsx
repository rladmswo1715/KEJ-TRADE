const VolumePanel = () => {
  return (
    <section className='bg-slate-900/70 border border-slate-800 rounded-2xl p-4 h-28 flex flex-col'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-xs font-semibold tracking-[0.18em] text-slate-500'>
          VOLUME
        </h3>
        <span className='text-[11px] text-slate-500'>24h Volume</span>
      </div>

      <div className='flex-1 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center justify-center'>
        <span className='text-xs text-slate-600'>거래량 차트</span>
      </div>
    </section>
  );
};

export default VolumePanel;
