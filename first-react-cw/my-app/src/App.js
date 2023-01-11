import logo from './logo.svg';
import './App.css';


const  App = () => {

  let targetLeft = 100
  let targetBar = 0



  const onePoundBtn = () => {
    console.log("one pund bn pressed")
    targetBar += 1
    targetLeft -= 1
  
}
  
  
  
  
  return (
    <>
      <section>
    
          
        <div className="top-box"><h1 className="title"> FUNDRAISING CAMPAIGN </h1></div>
        <div className="middle-box"></div>
      <div className="target-box"> <h1 classNames="target">TARGET £100 </h1> </div>
      <div className="donation-box">
        <div className="donation-target">
          <div className="loading-bar"></div>
        </div>
        <div className="donation-bar">
          <h2 className="target-text"> YOU NEED £100 MORE TO REACH TARGET </h2> 
        </div>
      </div>
      <div className="bottom-box">
      <div className="donate-button">
        <button onClick={onePoundBtn} className="one-pound-button">£1</button>
      </div>
      <div className="donate-button">
        <button className="five-pound-button">£5</button>
      </div>
      <div className="donate-button">
        <button className="ten-pound-button">£10</button>
      </div>
    </div>
      </section>
        
    </>

  );
}


export default App;

