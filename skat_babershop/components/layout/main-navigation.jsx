//NextJS tookit 
import Image from "next/image"
import Link from "next/link"

function MainNavigation() {
    return (
      <>
        <Link href={'/'}><Image src={'/images/logo/Gorge-Logo.jpg'} alt='logo' width={150} height={100}/></Link>
        <nav>
          <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About Us</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            <li><Link href={'/pricing'}>Pricing</Link></li>
          </ul>
        </nav>
      </>
    )
  }

export default MainNavigation