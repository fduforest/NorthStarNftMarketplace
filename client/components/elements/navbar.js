import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { MdMenu } from "react-icons/md"
import NextImage from "./image"
import MobileNavMenu from "./mobile-nav-menu"

const Navbar = () => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)
  const currentPathname = router.pathname
  const navbarItems = [
    { link: "/create-nft", text: "Create" },
    { link: "/account", text: "Account" },
  ]

  return (
    <>
      {console.log(router.pathname)}
      {/* The actual navbar */}
      <nav className="z-50 fixed w-full">
        <div className="container sm:px-6 sm:py-3 md:px-8 md:py-6 flex flex-row items-center justify-between border  border-b">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <a href="/" className="md:w-170 w-80">
              NorthStar Logo
            </a>

            {/* List of links on desktop */}
          </div>
          <div className="flex">
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button>
          </div>
          {/* hidden class activated  on responsive*/}
          <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">
            {navbarItems.map((navItem) => (
              <li>
                <a href={navItem.link}>
                  <div className="hover:text-gray-900 px-2 py-1">
                    {navItem.text}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbarItems={navbarItems}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

export default Navbar
