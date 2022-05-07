import { MdClose, MdChevronRight } from "react-icons/md"
import { useLockBodyScroll } from "../../utils/hooks"
import NextImage from "./image"

const MobileNavMenu = ({ navbarItems, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="mobile-nav-menu w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-yellow-10 z-50 pb-6">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Logo */}
          <a href="">YUP</a>
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {navbarItems.map((navItem) => (
              <li
                onClick={closeSelf}
                key={navItem.id}
                className="block w-full closeSelf"
              >
                <a href={navItem}>
                  <div className="hover:text-gray-900 py-6 flex flex-row justify-between items-center">
                    <span>{navItem.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNavMenu
