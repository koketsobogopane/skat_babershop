//NextJS toolkit
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../../public/Images/logo/logo1.png'
import { FaBurger } from 'react-icons/fa6';

//ui toolkit
import NavLink from '../ui/nav-link';

//React Icons

function MainNavigation() {
  return (
    <>
      <div className=" sticky top-0 w-full  bg-yellow-500 z-50 p-3 ">
        <div className=" flex justify-between items-center">
          <Link href={'/'} className=" md:pl-8">
            <Image
              // src={'/logo/logo1.png'}
              src={logoImage}
              alt="logo"
              width={60}
              height={50}
              priority
            />
          </Link>
          <button type='button' className=' md:hidden '><FaBurger size={20}/></button>

          <nav className=" pr-52 md:block hidden">
            <ul className=" flex justify-between items-center font-semibold text-lg gap-4">
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
        <nav>
        <ul className="hidden flex-col items-center font-semibold text-lg gap-4 ">
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
