import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]


type HeaderProps = { title: string }
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <Disclosure as="nav" className="bg-white ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex justify-between h-24">
                <div className="flex">
                  <div className="flex-shrink-0 items-center">
                    <img
                      className="lg:block h-24"
                      // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      src="/logo.png"
                      alt="Workflow"
                    />
                  </div>
                  {/*smより上であればdisplay:flex*/}
                  {/*そうでなければdisplay:hiddenが有効になる*/}
                  <div className="sm:-my-px sm:ml-6 sm:flex sm:space-x-8 hidden">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true"/>
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/*<header className="bg-white shadow">*/}
      {/*  <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">*/}
      {/*    <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>*/}
      {/*  </div>*/}
      {/*</header>*/}
    </>
  )
}

export default Header;
