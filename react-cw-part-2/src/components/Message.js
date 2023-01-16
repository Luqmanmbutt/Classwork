import React from 'react'

const Message = () => {

  const alertMessage = () => {
    return (
      window.alert("Hello World")
    )
  }

  
  return (
    <>
      <div>
        <button onClick={alertMessage} className="btn" >Press Me</button>
      </div>
    </>

  );
}

export default Message;