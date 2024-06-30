import React from 'react';

interface optionsStudentType {
  label: string;
  id: string;
}

const Dashboard = () => {
  const optionsStudent: optionsStudentType[] = [
    { label: 'Y123', id: 'Y123' },
    { label: 'Y687', id: 'Y687' },
  ];

  return (
    <div className='h-screen overflow-auto m-0 p-3'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl font-semibold'>Tracking</div>
        <div className='flex gap-x-12'>
          <form className='max-w-lg mx-auto'>
            <div className='relative w-full'>
              <input
                className='block p-2 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#80858d]'
                placeholder='Student Code ...'
                // onChange={}
              />
            </div>
          </form>

          <div>Create</div>
          <div>Create</div>
          <div>Create</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
