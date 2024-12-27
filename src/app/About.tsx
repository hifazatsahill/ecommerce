import React from 'react'


export default function About  ()  {
  return (
    
    <main className='flex'>
            <div className='flex'>
              <div className='flex justify-between px-2 py-4'>
              <img src="hrd.png" width={100} height={51} alt="hrd" />
          </div>
            </div>
            <div className='flex'>
            <div className='flex justify-between px-36 py-6'>
              <img src="frs.png"width={192} height={200} alt="frs" />
            </div>
        <div className='flex justify-between'>
            <img src="all.png"width={1092} height={500} alt="all" />
        </div>
            </div>

        <div className='flex flex-col items-center justify-between'>
          <img src="ftrn.png"width={700} height={259} alt="ftrn" />
        </div> 
        <div className='flex justify-center px-40'>
          <img src="whp1.png"width={1440} height={750} alt="whp1" />
        </div>
    </main>
  );
}
