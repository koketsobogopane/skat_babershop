//NextJS toolkit
import Image from 'next/image';
import Link from 'next/link';

//ui toolkit
import NavLink from '../ui/nav-link';

//React Icons

function MainNavigation() {
  return (
    <>
      <div className=" sticky top-0 w-full  bg-yellow-500 z-50 p-3 mb-10">
        <div className=" flex justify-between items-center ">
          <Link href={'/'} className=" pl-8">
            <Image
              src={'/images/logo/logo1.png'}
              alt="logo"
              width={100}
              height={50}
              priority
            />
          </Link>
          <nav className=" pr-52 ">
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
      </div>
    </>
  );
}

export default MainNavigation;
