import { useState } from "react";
import { Menu, Close, Next } from "../icons";
import { motion } from 'framer-motion';
import { SearchBar } from "./SearchBar";
import { ContinentsFilter } from "./ContinentsFilter";
import { OrderFilter } from "./OrderFilter";
import { Link } from "react-router-dom";

const NavbarMobile = () => {

  // const navigationItems = ['home', 'about', 'skills', 'works', 'contact']
  const [active, setActive] = useState(false);

  const variants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }


  return (
    <nav className="relative z-50">
      <button className="absolute left-2 top-2 h-8 " onClick={() => setActive(!active)}>
        <Menu />
      </button>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-[#1e1f29] fixed top-0 left-0"
      />

      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={active ? 'visible' : ''}
        className={`${active ? 'left-0' : '-left-full'}  fixed top-0 bottom-0 w-full flex flex-col justify-center items-center gap-8 text-sm font-semibold transition-all duration-300 overflow-hidden`}
      >
        <div className="logo text-3xl">
          Countries
        </div>

        <hr className="text-line w-11/12" />

        <div
          onClick={() => setActive(false)}
          className="h-10 p-2 absolute top-3 right-2 text-red rounded-full bg-background"
        >
          <Close />
        </div>

        <SearchBar />

        <OrderFilter />

        <ContinentsFilter />

        <Link to="/activities" className="flex w-full items-center justify-between group">
          <h2 className="capitalize group-hover:drop-shadow-icon transition-all duration-300 ease-in-out">all activities</h2>
          <Next className="h-6 w-6 group-hover:drop-shadow-icon transition-all duration-300 ease-in-out" />
        </Link>

        <Link to="/new-activity" className="w-fit h-fit hover:text-sky transition-all duration-300 ease-in-out px-4">
          Create Activity
        </Link>

        {/* {
          navigationItems.map((item, key) => {
            return (
              <a key={key} onClick={() => setActive(false)} className="capitalize" href={`#${item}`}>{item}</a>
            )
          })
        } */}

        <hr className="text-line w-11/12" />
      </motion.div>



    </nav>
  )
}

export default NavbarMobile;