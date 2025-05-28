import { RiMenu3Line, RiSearch2Line } from '@remixicon/react'
import React from 'react'
import { useEffect } from 'react'


let key = import.meta.env.VITE_YOUTUBE_KEY
// let key = import.meta.env.VITE_YOUTUBE_KEY2;
// let key = import.meta.env.VITE_YOUTUBE_KEY3;

let base = "https://www.googleapis.com/youtube/v3/";

const Navbar = () => {


    // `${base}search?part=snippet&maxResults=20&q=${search}&type=video&key=${key}` // Use the search variable

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-wrap position-sticky top-0 start-0">
                <a className="navbar-brand px-3" href="#">
                    <button className='mx-2 text-white border-0'><RiMenu3Line /></button>
                </a>
                <div className="my-lg-0 d-flex bg-black ms-auto mx-3 rounded-pill">
                    <RiSearch2Line className='text-white btn'/> 
                    <input className="" type="search" id='search' placeholder="Search" aria-label="Search" />
                    <button className="" type="submit"> </button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

// style={{outline:"none"}}
