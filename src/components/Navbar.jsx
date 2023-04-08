
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'


import logo from '../assets/logo.png'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Templates', href: '/templates', current: false },
  { name: 'Planes', href: '/planes', current: false },
  { name: 'FAQs', href: '/faqs', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  
  const navigate = useNavigate()


  return (
    <Disclosure as="nav" className="bg-[#12192D] w-full h-auto fixed z-[100]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between max-w-[1100px] m-auto">
                <Link to={'/'} className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16  pb-0 m-1 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 mt-1 w-auto lg:block"
                    src={logo}
                    alt="Your Company"

                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block z-50  lg:mr-12">
                  <div className="flex   space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        
                        className="text-gray-200 rounded-md px-1 py-2 mt-3 text-sm font-medium scale-100 transition duration-150 hover:text-white hover:scale-105"
                        
                      >
                        {item.name}
                      </Link>
                    ))}
                   
                  </div>
                </div>
              </div>
             
                
            </div>
            
          </div>

          <Disclosure.Panel className=" sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={()=> navigate(`${item.href}`)}

                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
             
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}
