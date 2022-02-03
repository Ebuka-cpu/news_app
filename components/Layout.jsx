import React from 'react'
import Footer from '../components/Footer'
import Toolbar from "../components/Toolbar"

const Layout = ({children}) => {
    return (
        <div>
            <Toolbar/>
                {children}
            {/* <Footer/> */}
        </div>
    )
}

export default Layout
