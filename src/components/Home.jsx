import React, { useEffect, useState } from 'react'


const Home = () => {
    const [data, setData] = useState([])
     const [limit, setLimit] = useState(7)
    const [pageToken, setPageToken] = useState('')



    // let base = "https://www.googleapis.com/youtube/v3/"
    // const key = "?key=AIzaSyCXdoMd4flqqNR-537hAnWL0hjhi2huMUI"

    const fetchData = async () => {
        const res = await fetch(base + "search" + key + `&part=snippet&maxResults=${limit}`)
        const newdata = await res.json();

        console.log(newdata)
        setPageToken(newdata.nextPageToken || '')
        setData([...data, ...newdata.items])
    }
    console.log(data)

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>

            <div className="container my-5">
                <div className="row gap-y-1.5">
                    {
                        data.map((ele) => (
                            <div className='col-lg-2 col-sm-12 col-md-4  shadow'>
                                <iframe width="100%" height="300px" allowFullScreen src={`https://www.youtube.com/embed/${ele.id.videoId}`}></iframe>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Home