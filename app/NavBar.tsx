'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuBug } from 'react-icons/lu'

const NavBar = () => {
  const currentPath = usePathname()
  const Links = [
    { label: 'Dashboard', href: '/' },
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
            className={classNames({
              'text-zinc-900': currentPath == link.href,
              'text-zinc-500': currentPath != link.href,
              'hover:text-zinc-800 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
export default NavBar
