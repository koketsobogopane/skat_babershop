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
          <button type='button' className=' hidden '><FaBurger size={20}/></button>

          <nav className=" pr-52 ">
            <ul className=" flex md:justify-between md:flex-row flex-col md:static absolute bg-yellow-500 md:min-h-[7vh] min-h-[30vh] w-full left-0 top-[100%] items-center font-semibold text-lg gap-8 md:gap-[4vw]">
              <li>
                <NavLink href={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink href={'/construction'}>About Us</NavLink>
              </li>
              <li>
                <NavLink href={'/construction'}>Services</NavLink>
              </li>
              <li>
                <NavLink href={'/construction'}>Pricing</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;
