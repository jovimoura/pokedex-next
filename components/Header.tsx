import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { House, Moon, Sun, User } from 'phosphor-react'
import { useEffect, useState } from 'react'

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <Sun
          className="w-7 h-7 text-red-600"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <Moon
          className="w-7 h-7 text-red-600"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }
  return (
    <header className="border-b border-red-600 mx-auto px-4 sm:px-6 py-2 dark:border-red-700">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <nav className="w-full flex justify-center items-center">
          <Link href="/">
            <a
              className={`flex justify-center items-center mr-14 gap-1 ease-linear duration-500 ${
                router.pathname === '/'
                  ? 'text-red-600 '
                  : 'text-gray-300'
              }`}>
              {router.pathname === '/' ? (
                <House className="w-5 h-5 ease-linear duration-500 text-red-600" />
              ) : (
                <House className="w-5 h-5 ease-linear duration-500 text-transparent" />
              )}
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`flex justify-center items-center gap-1 ease-linear duration-500 ${
                router.pathname === '/about'
                  ? 'text-red-600'
                  : 'text-gray-300'
              }`}>
              {router.pathname === '/about' ? (
                <User className="w-5 h-5 ease-linear duration-500 text-red-600" />
              ) : (
                <User className="w-5 h-5 ease-linear duration-500 text-transparent" />
              )}
              About
            </a>
          </Link>
        </nav>
        {renderThemeChanger()}
      </div>
    </header>
  )
}
