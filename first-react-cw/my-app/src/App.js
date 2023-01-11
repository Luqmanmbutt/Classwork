import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


function App() {
  return (
    <div>
      <header>
    
          
        <div className="top-box"><h1 className="title"> FUNDRAISING CAMPAIGN </h1></div>
        <div className="middle-box"></div>
      <div className="target-box"> <h1 clasNames="target">TARGET £100 </h1> </div>
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
        <button onClick={this.handleClick}>£1</button>
      </div>
      <div className="donate-button">
        <button className="five-pound-button">£5</button>
      </div>
      <div className="donate-button">
        <button className="ten-pound-button">£10</button>
      </div>
    </div>
      </header>
        
    </div>

  );
}



