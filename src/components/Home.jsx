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
let key = import.meta.env.VITE_YOUTUBE_KEY2;

const Home = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(2);
  const [pageToken, setPageToken] = useState("");

  let base = "https://www.googleapis.com/youtube/v3/";

  const fetchData = async () => {
    // const res = await fetch(base + "search/key=" + key + `&part=snippet&maxResults=${limit}`)

    try {
      const res = await fetch(
        `${base}search?key=${key}&part=snippet&type=video&videoDuration=medium&maxResults=${limit}&q=marvel`
      ); // video details
      const newdata = await res.json();
      const vidIds = newdata.items?.map((ele) => ele.id.videoId);
      // console.log(vidIds)
      const veiwRes = await fetch(
        `${base}videos?key=${key}&part=statistics&id=${vidIds.join(",")}`
      ); // view request
      const viewCount = await veiwRes.json();

      const chanids = newdata.items?.map((ele) => ele.snippet.channelId);
    //   console.log(chanids)

      const img_url = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${chanids}&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyCaRM6Z-4k3XOUx9-zCIN_D3olQ0-T63sU`
      );
      const newimg = await img_url.json();

      console.log(newimg.items)

      const updateData = newdata.items.map((ele) => {
        const view = viewCount.items.find((el) => ele.id.videoId == el.id);
        if (view) {
          ele.snippet.viewCount = view.statistics.viewCount;
        }
        return ele;
      });
      setData(updateData);

      const channelData = updateData.map((ele) => {
        const channelimg = newimg.items.find((el) => ele.id.videoId);
        if (channelimg) {
          ele.snippet.thumbnails = channelimg.snippet.image;
        }
        console.log(channelimg)
        return ele;
      });

    // //   console.log(updateData);
    //   setData(channelData);
      console.log(channelData)
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
            <div
              className="col-lg-3 col-md-6 col-sm-12 border"
              key={ele.id.videoId}
            >
              {/* <iframe width={`{ele.snippet.thumbnails.high.width}px`} height={`{ele.snippet.thumbnails.high.height}px`} className='rounded-4' allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe> */}
              <img
                width={`{ele.snippet.thumbnails.high.width} + %`}
                height={`{ele.snippet.thumbnails.high.height} + %`}
                className="rounded-4 border img-fluid"
                src={`${ele.snippet.thumbnails.high.url}`}
                alt={ele.snippet.thumbnails.default.url}
              ></img>

              <div className="vid-footer d-flex justify-content-between my-2">
                <div className="disc">
                  <h6 className="mt-2 mb-1 mx-1">{ele.snippet.title}</h6>
                  <p className="mx-1">{ele.snippet.channelTitle}</p>
                  <Views vCount={ele.snippet.viewCount} />
                  {}
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
