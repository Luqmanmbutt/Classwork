import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomePage = () => {

  const [data, setData] = useState(null)

  useEffect (() => {
    const getData = async () => {
      const response = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      setData(response)
    }
    getData()
  }, [])
  console.log('data>>>>>', data?.data?.data[0].Nation)

  return (
    <>
    <div>
      {data?.data?.data.map(info =>{
        return (
        <>
        <div className= 'info-box'>
          <p>{info.Year}</p>
          <p>{info.Nation}</p>
        </div>
        </>
        )
      })}
    </div>
      
        
      
    </>
  )    
}

export default HomePage