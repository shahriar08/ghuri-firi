/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto '>
        <Image
        src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg"
        // layout='fill'
        width={120}
        height={120}
        // objectFit='contain'
        // objectPosition='left'
        />
      </div>
      <div>Header</div>
      <div>Header</div>
    </header>
  );
}

export default Header;
