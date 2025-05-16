import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand px-3" href="#">
                    <img className='img-fluid' style={{ width: "100px" }} src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="" />
                </a>
                <form className=" my-2 my-lg-0 d-flex ms-auto px-3">
                    <input className="bg-dark p-2 border border-secondary rounded-start-circle border-end-0  text-white   " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn my-2 my-sm-0 " type="submit"><i className="ri-search-line text-white border border-secondary border-start-0 rounded-end-circle p-2"></i></button>
                </form>

            </nav>
        </div>
    )
}

export default Navbar