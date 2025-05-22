import React, { useEffect, useState } from 'react'
import { vid, view } from './data'
import { RiDownload2Fill, RiDownloadLine, RiMore2Fill, RiPlayList2Fill, RiShare2Line, RiShareForward2Line, RiShareForwardLine } from '@remixicon/react'
import { BsEyeFill } from 'react-icons/bs'
import { FaThumbsUp } from 'react-icons/fa'

let key = import.meta.env.VITE_YOUTUBE_KEY
// let key = import.meta.env.VITE_YOUTUBE_KEY2


const Home = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(6)
    const [pageToken, setPageToken] = useState('')



    let base = "https://www.googleapis.com/youtube/v3/"

    const fetchData = async () => {
        // const res = await fetch(base + "search/key=" + key + `&part=snippet&maxResults=${limit}`) 
        const res = await fetch(`${base}search?key=${key}&part=snippet&type=video&videoDuration=medium&maxResults=${limit}`) // video details
        const newdata = await res.json();
        const vidIds = newdata.items.map((ele) => ele.id.videoId)
        // console.log(vidIds)
        const veiwRes = await fetch(`${base}videos?key=${key}&part=statistics&id=${vidIds.join()}`) // view request
        const viewCount = await veiwRes.json()
        console.log(viewCount)
        console.log(newdata)
        setPageToken(newdata.nextPageToken || '')
        setData([...data, ...newdata.items])





    }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    console.log(vid)
    return (
        <div>
            <div className="my-5"></div>
            <div className="my-5">.</div>
            <div className="my-5"></div>
            <div className="container-fluid my-3 text-white ">
                <div className="row gap-y-1.5">
                    {
                        vid.items.map((ele) => (
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                {/* <iframe width={`{ele.snippet.thumbnails.high.width}px`} height={`{ele.snippet.thumbnails.high.height}px`} className='rounded-4' allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe> */}
                                <img width={`{ele.snippet.thumbnails.high.width} + %`} height={`{ele.snippet.thumbnails.high.height} + %`} className='rounded-4 img-fluid' src={`${ele.snippet.thumbnails.high.url}`} alt={ele.snippet.thumbnails.default.url}></img>

                                <div className="vid-footer d-flex justify-content-between my-2">
                                    <div className="disc">
                                        <h6 className='mt-2 mb-1 mx-1'>{ele.snippet.title}</h6>
                                        <p className='mx-1'>{ele.snippet.channelTitle}</p>
                                        <p>{
                                            view.items.map((ele) => {
                                                return (
                                                    <div className='d-flex justify-content-around'>
                                                        <p><BsEyeFill className='mx-2' />{ele.statistics.viewCount}</p>
                                                        <p><FaThumbsUp className='mx-2' />{ele.statistics.likeCount}</p>
                                                    </div>
                                                )

                                                // return <p><BsEyeFill className='mx-2' />{ele.statistics.viewCount}</p>
                                                // return <p><BsEyeFill className='mx-2' />{ele.statistics.viewCount}</p>
                                            })
                                        }</p>
                                    </div>
                                    <div className="drop-down">
                                        <RiMore2Fill id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                                        <ul className="dropdown-menu dropdown-menu-dark bg-yt dropdown-menu-start my-1" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#"><RiPlayList2Fill className='bg-transparent' /> Add to queue</a></li>
                                            <li><a className="dropdown-item" href="#"><RiDownloadLine className='bg-transparent' /> Download</a></li>
                                            <li><a className="dropdown-item" href="#"><RiShareForwardLine className='bg-transparent' /> Share</a></li>
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