import React from 'react'// first thing you do is import react
// write the name of the function excatly the same way as components 
const NavigationBar = () => {
  let obj = {
    name: 'julie',
    age: '56'
  }

  let array = [0, 1, 2]
  let newArray = [ ...array, 5]
  console.log('newarray ', newArray)

  const newObj = { ...obj, address: 'london'}
    console.log('newObj', newObj)
  return (
    <>
      <div className="navbar-container">  
        <h1 className="nav-bar">Navigation bar</h1>
      </div>
    </>
  )

}

export default NavigationBar; // export default same as component 


