import './App.css';
import img from './ccp/TradeWar1.png'

function App() {
  
  return (
<div style={{border:'solid1pxblack',maxWidth:'100wv'}}>
  <h1 className='titlered'> China VS USA </h1>
   <br></br>
   <img className='TradeWar1' src ={img} alt="img"/>
   <br></br>
   
   <iframe width="560" height="315" src="https://www.youtube.com/embed/g_N9HsNTA88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div> 
  );
  }
export default App;