//NextJS tookit
import Image from 'next/image';
import Link from 'next/link';

function MainNavigation() {
  return (
    <>
      <div className=' flex bg-yellow-500 justify-between items-center p-3'>
        <Link href={'/'} className=' pl-8'>
          <Image
            src={'/images/logo/logo1.png'}
            alt="logo"
            width={150}
            height={100}
          />
        </Link>
        <nav className=' pr-52 '>
          <ul className=' flex justify-between items-center font-semibold text-xl gap-4'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About Us</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
            <li>
              <Link href={'/pricing'}>Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
