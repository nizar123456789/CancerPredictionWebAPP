import React, { Fragment } from 'react'
import Navbars from '../Navbar'
import {Outlet} from 'react-router-dom'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'



function Layout() {
  return (
    <Fragment>
 <Navbars/>
 <main>
    <Outlet/>
 </main>
 <Intro/>
<Footer/>
    </Fragment>
  )
}

export default Layout