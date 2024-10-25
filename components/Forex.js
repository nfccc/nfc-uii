import React, { useState } from 'react';

const ForexBotSettings = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='flex flex-col border rounded-lg p-4 bg-blue-500 text-white h-full'>
      <h2 className='text-xl font-bold mb-4'>Forex Bot Automation</h2>

      {/* Status Section */}
      <div className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>Bot Status</h3>
        <div className={`p-2 rounded-lg ${isActive ? 'bg-green-500' : 'bg-red-500'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>

      {/* Settings Section */}
      <div className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>Bot Settings</h3>
        <form>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Trading Pair</label>
            <input
              type='text'
              placeholder='e.g., EUR/USD'
              className='w-full p-2 rounded-lg border border-gray-300'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Trading Volume</label>
            <input
              type='number'
              placeholder='e.g., 1000'
              className='w-full p-2 rounded-lg border border-gray-300'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Risk Management</label>
            <select className='w-full p-2 rounded-lg border border-gray-300'>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Strategy</label>
            <textarea
              placeholder='Describe your trading strategy...'
              rows='4'
              className='w-full p-2 rounded-lg border border-gray-300'
            ></textarea>
          </div>
        </form>
      </div>

      {/* Controls Section */}
      <div className='flex flex-col'>
        <button
          onClick={handleToggle}
          className={`mb-2 p-2 rounded-lg ${isActive ? 'bg-red-500' : 'bg-green-500'} text-white font-semibold`}
        >
          {isActive ? 'Stop Bot' : 'Start Bot'}
        </button>
        <button className='p-2 bg-gray-700 rounded-lg text-white font-semibold'>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ForexBotSettings;
