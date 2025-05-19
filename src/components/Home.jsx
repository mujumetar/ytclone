import React, { useEffect, useState } from 'react'
import { vid } from './data'
import { RiDownload2Fill, RiDownloadLine, RiMore2Fill, RiPlayList2Fill, RiShare2Line, RiShareForward2Line, RiShareForwardLine } from '@remixicon/react'



let key = import.meta.env.VITE_YOUTUBE_KEY
// let key = import.meta.env.VITE_YOUTUBE_KEY2


const Home = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6)
    const [pageToken, setPageToken] = useState('')



    let base = "https://www.googleapis.com/youtube/v3/"

    const fetchData = async () => {
        // const res = await fetch(base + "search/key=" + key + `&part=snippet&maxResults=${limit}`)
        const res = await fetch(`${base}search?key=${key}&videoDuration=medium&part=snippet&maxResults=${limit}`)
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
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                {/* <iframe width={`{ele.snippet.thumbnails.high.width}px`} height={`{ele.snippet.thumbnails.high.height}px`} className='rounded-4' allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe> */}
                                <img width={`{ele.snippet.thumbnails.high.width}px`} height={`{ele.snippet.thumbnails.high.height}px`} className='rounded-4 img-fluid' src={`${ele.snippet.thumbnails.high.url}`} alt={ele.snippet.thumbnails.default.url}></img>


                                <div className="vid-footer d-flex justify-content-between my-2">
                                    <div className="disc">
                                        <h6 className='mt-2 mb-1 mx-1'>{ele.snippet.title}</h6>
                                        <p className='mx-1'>{ele.snippet.channelTitle}</p>
                                    </div>
                                    <div className="drop-down">
                                        <RiMore2Fill id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                                        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-start my-1" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#"><RiPlayList2Fill className='bg-transparent' /> Add to queue</a></li>
                                            <li><a class="dropdown-item" href="#"><RiDownloadLine className='bg-transparent' /> Download</a></li>
                                            <li><a class="dropdown-item" href="#"><RiShareForwardLine className='bg-transparent' /> Share</a></li>
                                        </ul>
                                    </div>

                                    {/* <img src={} alt="" /> */}
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
            {/*  ele.snippet.thumbnails.default.url*/}

        </div >
    )
}

export default Home