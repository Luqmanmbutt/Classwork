import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {

  const [dex, setDex] = useState(null)

  useEffect (() => {
    const getDex = async () => {
      const url = await axios.get("https://pokeapi.co/api/v2/pokemon/")
      setDex(url)
    }
    getDex()
  }, [])
    
  console.log('Dex>>>', dex?.data?.results[0].name)


  return (
    <>
    <div>
      {dex?.data?.results.map(info =>{
        return (
          <>
          <div className= 'info-box'>
            <p>{info.results}</p>
            <p>{info.name}</p>
          </div>
          </>
        )
      })}
    </div>



    </>
  )
}

export default HomePage 