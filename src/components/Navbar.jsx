import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand px-3" href="#">
                    <img className='img-fluid' style={{ width: "100px" }} src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="" />
                </a>
                <form class="form-inline my-2 my-lg-0 d-flex ms-auto px-3">
                    <input class="form-control bg-dark border border-secondary text-white border  border-end-0" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn my-2 my-sm-0 border border-secondary border-start-0 rounded-end-5 rounded-end-circle" type="submit"><i className="ri-search-line text-white"></i></button>
                </form>

            </nav>
        </div>
    )
}

export default Navbar