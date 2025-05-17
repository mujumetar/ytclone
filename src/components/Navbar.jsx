import { RiSearch2Line } from '@remixicon/react'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand px-3" href="#">
                    <img className='img-fluid' style={{ width: "80px" }} src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="" />
                </a>
                <div className=" my-lg-0 d-flex m-auto  w-50 rounded-pill border">
                    <RiSearch2Line className='text-white btn'/> 
                    <input className="bg-dark p-2 border border-secondary border-end-0 border-0 text-white w-100" style={{outline:"none"}} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn text-white my-auto bg-black rounded-end-pill" type="submit"> <RiSearch2Line/> </button>
                </div>

            </nav>
        </div>  
    )
}

export default Navbar