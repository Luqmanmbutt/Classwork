import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Message from './components/Message'

function App() {
  
  return (
    <>
    {/* this is calling the components to one file which is app.js so when your run the app is renders all the components on one page */}
      <NavigationBar /> 
      <Message />
    </>

  );

}

export default App;