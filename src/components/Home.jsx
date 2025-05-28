import React, { useEffect, useState } from "react";
// import { vid, view } from './data'
import {
    RiDownload2Fill,
    RiDownloadLine,
    RiMore2Fill,
    RiPlayList2Fill,
    RiShare2Line,
    RiShareForward2Line,
    RiShareForwardLine,
} from "@remixicon/react";
import { BsEyeFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import Views from "./Views";

// let key = import.meta.env.VITE_YOUTUBE_KEY
// let key = import.meta.env.VITE_YOUTUBE_KEY2;
let key = import.meta.env.VITE_YOUTUBE_KEY3;

const Home = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(5);
    const [pageToken, setPageToken] = useState("");

    let base = "https://www.googleapis.com/youtube/v3/";
    const fetchData = async () => {
        // `${base}search/key=${key}&part=snippett&type=video&videoDuration=medium&maxResults=${limit}&q=marvel`)
        try {
            const res = await fetch(
                `${base}search?key=${key}&part=snippet&type=video&videoDuration=medium&maxResults=${limit}&q=marvel`
            );
            // video details
            const newdata = await res.json();
            // console.log(newdata)

            const vidIds = newdata.items?.map((ele) => ele.id.videoId);
            // console.log(vidIds)

            const veiwRes = await fetch(
                `${base}videos?key=${key}&part=statistics&id=${vidIds.join(",")}`
            ); // view request
            const viewCount = await veiwRes.json();

            const chanids = newdata.items?.map((ele) => ele.snippet.channelId);
            //   console.log(chanids)

            const img_url = await fetch(
                `${base}channels?part=snippet&id=${chanids.join(
                    ","
                )}&thumbnails&key=${key}`
            );
            const newimg = await img_url.json();















            

            // const durations = await fetch(
            //     `${base}videos?id=${vidIds.join(",")}&part=contentDetails&key=${key}`
            // );
            // const dur_data = await durations.json();
            // console.log(dur_data);


            // var duration = vidIds;
            // var humans = duration(/(^PT|S$)/g, "").split(/[^\d]/).map((item) => item.length < 2 ? "0" + item : item).join(":").replace(/^0/, "");
            // console.log(humans);















            const updateData = newdata.items?.map((ele) => {
                const view = viewCount.items.find((el) => ele.id.videoId == el.id);
                if (view) {
                    ele.snippet.viewCount = view.statistics.viewCount;
                }
                const channelimg = newimg.items?.find(
                    (el) => ele.snippet.channelId == el.id
                );
                if (channelimg) {
                    ele.snippet.chanImg = channelimg.snippet.thumbnails;
                }

                // const dur_data = dur_data.items?.map((el) => ele.id.videoId == el.id)

                return ele;
            });
            // console.log(newdata);
            setData(updateData);

            // console.log(updateData);
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {

        fetchData();
    }, []);

    return (
        <div>
            <div className="my-5"></div>
            <div className="my-5">.</div>
            <div className="my-5"></div>
            <div className="container-fluid my-3 text-white ">
                <div className="row gap-y-1.5">
                    {data.map((ele) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 " key={ele.id.videoId}>
                            {/* <iframe width={`{ele.snippet.thumbnails.high.width}px`} height={`{ele.snippet.thumbnails.high.height}px`} className='rounded-4' allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe> */}
                            <img
                                className=" img-fluid rounded-3"
                                width={`{ele.snippet.thumbnails.high.width} + %`}
                                height={`{ele.snippet.thumbnails.high.height} + %`}
                                src={`${ele.snippet.thumbnails.high.url}`}
                                alt={ele.snippet.thumbnails.default.url}
                            ></img>

                            <div className="vid-footer d-flex justify-content-between my-2">
                                <div className="main-desc">
                                    <div className="disc d-flex">
                                        <a target="_blank" href={`https://youtube.com/channel/${ele.snippet.channelId}`}>
                                            <img
                                                src={ele.snippet.chanImg.default.url}
                                                style={{ width: "50px", height: "50px" }}
                                                className="rounded-circle my-2"
                                                alt={ele.snippet.chanImg.default.url}

                                            />
                                        </a>

                                        <div className="center borde mx-3 ">
                                            <h6 className="mt-2 mb-1 ">{ele.snippet.title}</h6>
                                            <a target="_blank" className="text-white text-decoration-none" href={`https://youtube.com/channel/${ele.snippet.channelId}`}><p className="m-0">{ele.snippet.channelTitle}</p></a>
                                            <div className="viewsss my-0">
                                                <Views vCount={ele.snippet.viewCount} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="drop-down">
                                    <RiMore2Fill
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    />
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark bg-yt dropdown-menu-start my-1"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <RiPlayList2Fill className="bg-transparent" /> Add to
                                                queue
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <RiDownloadLine className="bg-transparent" /> Download
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <RiShareForwardLine className="bg-transparent" /> Share
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* <img src={} alt="" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*  ele.snippet.thumbnails.default.url*/}
        </div>
    );
};

export default Home;
