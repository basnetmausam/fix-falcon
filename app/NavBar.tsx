import Link from 'next/link'

import { LuBug } from 'react-icons/lu'
const NavBar = () => {
  const Links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/' className='color:red'>
        <LuBug />
      </Link>
      <ul className='flex space-x-6'>
        {Links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
export default NavBar
