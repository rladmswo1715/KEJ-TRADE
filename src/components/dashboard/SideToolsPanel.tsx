const SideToolsPanel = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-xs font-semibold tracking-[0.18em] text-slate-500 mb-3'>
        TOOLS
      </h2>

      <div className='flex-1 rounded-2xl bg-slate-900/70 border border-slate-800 p-4 text-sm text-slate-300'>
        <p className='font-semibold mb-2'>INFO</p>
        <p className='text-xs text-slate-400'>패널</p>
      </div>
    </div>
  );
};

export default SideToolsPanel;
