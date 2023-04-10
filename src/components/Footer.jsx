import React from 'react'
import { Link } from 'react-router-dom'

import wppImg from '../assets/footer/whatsapp.png'
import instaImg from '../assets/footer/instagram.png'
import linkedInImg from '../assets/footer/linkedin.png'

const Footer = () => {

  return(
    <>
            
            <footer aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900 z-[100]">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-white">
      
      <h5 className='text-2xl'>Twenty<span className='text-[#5FB5DE]'>Dev</span></h5>
    </div>

    <p
      className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400"
    >
      Desarrolladora de páginas, templates y sitios web en crecimiento. 
    </p>

    <nav aria-label="Footer Nav" className="mt-12">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="#nosotros"
          >
            Nosotros
          </a>
        </li>


        <li>
          <Link
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            to={'/contacto'}
          >
            Contacto
          </Link>
        </li>

        <li>
          <Link to={'/templates'}
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            
          >
            Templates
          </Link>
        </li>

        <li>
          <Link to={'/faqs'}
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            
          >
            FAQs
          </Link>
        </li>
      </ul>
    </nav>

    <ul className="mt-10  flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="https://wa.me/+5491141800604?text=Hola%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Whatsapp</span>
          <img src={wppImg} alt="whatsapp"  width={35} />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/twentydev/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Instagram</span>
          <img src={instaImg} alt="instagram" width={35} />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/alejo-fernandez-23821b243/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">LinedIn</span>
          <img src={linkedInImg} alt="LinkedIn" width={35} />
        </a>
      </li>

     

     

    </ul>

    <p className="mt-10 text-center text-sm text-gray-500 ">
      Copyright &copy; 2023. Todos los derechos reservados.
    </p>
  </div>
    </footer>
    </>
  )
}

export default Footer