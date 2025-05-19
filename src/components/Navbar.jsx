import { RiSearch2Line } from '@remixicon/react'
import React from 'react'


const Navbar = () => {
    return (
        
        <div>
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-wrap position-sticky top-0 start-0">
                <a className="navbar-brand px-3" href="#">
                    <img className='img-fluid' style={{ width: "100px" }} src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="" />
                </a>
                <div className=" my-lg-0 d-flex bg-black ms-auto mx-3 rounded-pill ">
                    {/* <RiSearch2Line className='text-white btn'/>  */}
                    <input className="bg-dark p-2 border border-secondary rounded-start-pill px-4 border-end-0  text-white border" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn text-white my-auto bg-transparent rounded-end-pill" type="submit"> <RiSearch2Line/> </button>
                </div>

            </nav>
        </div>  
    )
}

export default Navbar

// style={{outline:"none"}}