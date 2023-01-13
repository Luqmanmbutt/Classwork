import logo from './logo.svg';
import './App.css';


const message = () => {
   return (
   window.alert("Hello World")
  )
  console.log("working")
}
 
function App() {
  return (
    <div>
        <button onClick={message} className= "btn" >Press Me</button>
    </div>
  );
}

export default App;
