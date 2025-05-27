import React, { useEffect, useState } from 'react'

const Views = ({vCount}) => {


const [v, setV] = useState("");

useEffect(()=>{      
    if(vCount/100000000 >= 1)
    {
        let n = vCount/100000000
        setV(`${n.toFixed(1)}B`)
    }
    else if(vCount / 1000000 >= 1)
    {
        let n = vCount/ 1000000
        setV(`${n.toFixed(1)}M`)
    }
    else if(vCount /1000 >=1)
        {
            let n = vCount/1000
        setV(`${n.toFixed(1)}K`)
    }
    else{
        setV(`${vCount} `)
    }
}, [vCount])

  return (
    <div className='m-0 p-0 text-secondary fs-0'>{v} views</div>
  )
}

export default Views;