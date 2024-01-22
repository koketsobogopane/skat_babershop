//NextJS tookit
import Image from 'next/image';
import Link from 'next/link';

//ui toolkit
import NavLink from '../ui/nav-link';

function MainNavigation() {
  return (
    <>
      <div className=' flex bg-yellow-500 justify-between items-center p-3 mb-10'>
        <Link href={'/'} className=' pl-8'>
          <Image
            src={'/images/logo/logo1.png'}
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <nav className=' pr-52 '>
          <ul className=' flex justify-between items-center font-semibold text-lg gap-4'>
            <li>
              <NavLink href={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink href={'/about'}>About Us</NavLink>
            </li>
            <li>
              <NavLink href={'/services'}>Services</NavLink>
            </li>
            <li>
              <NavLink href={'/pricing'}>Pricing</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
