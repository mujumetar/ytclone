import React, { useEffect, useState } from 'react'
import { vid } from './data'



let key = import.meta.env.VITE_YOUTUBE_KEY
// let key = import.meta.env.VITE_YOUTUBE_KEY2


const Home = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6)
    const [pageToken, setPageToken] = useState('')



    let base = "https://www.googleapis.com/youtube/v3/"

    const fetchData = async () => {
        // const res = await fetch(base + "search/key=" + key + `&part=snippet&maxResults=${limit}`)
        const res = await fetch(`${base}search?key=${key}&part=snippet&maxResults=${limit}`)
        const newdata = await res.json();

        console.log(newdata)
        setPageToken(newdata.nextPageToken || '')
        setData([...data, ...newdata.items])
    }
    console.log(data)

    // useEffect(() => {
    //     fetchData();
    // }, [])

    console.log(vid)
    return (
        <div>

            <div className="container-fluid my-3 text-white">
                <div className="row gap-y-1.5">
                    {
                        vid.map((ele) => (
                            <div className= 'col-lg-3 col-md-6 col-sm-12'>
                                {/* <iframe width="100%" height="400px" className='rounded-4' allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe> */}
                                <img width={ele.snippet.thumbnails.default.width} height={ele.snippet.thumbnails.default.height} className='rounded-4 border' src={`https://www.youtube.com/embed/${ele.snippet.thumbnails.default.url}`} alt={ele.snippet.thumbnails.default.url}></img>
<h6 className='my-0'>{ele.snippet.title}</h6>
<p>{ele.snippet.channelTitle}</p>
                                {/* <img src={} alt="" /> */}
                            </div>
                        ))
                    }

                </div>
            </div>
            {/*  ele.snippet.thumbnails.default.url*/}

        </div>
    )
}

export default Home