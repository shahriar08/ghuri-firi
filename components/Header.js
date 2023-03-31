/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import {SearchIcon} from '@heroicons/react/solid';
function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto '>
        <Image
        src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg"
        // layout='fill'
        width={220}
        height={220}
        // objectFit='contain'
        // objectPosition='left'
        />
      </div>
      <div className='flex item-center md:border-2 rounded-full py-2'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Search' />
        {/* <SearchIcon/> */}
        <div className='hidden md:inline-flex bg-red-400 w-8 h-8 p-2 cursor-pointer text-white rounded-full mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg>
        </div>
      </div>
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline-flex'>Become a host</p>
        <div className="h-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
        </div>

        <div className='flex space-x-2 border-2 p-2 rounded-full'>
        <div className='h-6 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg>
        </div>
        <div className='h-6 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
