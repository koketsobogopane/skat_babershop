import Link from "next/link"

export default function NavLink(props) {
    const  {children, href} = props

  return (
    <Link href={href} className=" hover:text-zinc-600">{children}</Link>
  )
}
