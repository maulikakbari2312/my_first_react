import Chai from "./Chai";
import Calculator from "./calculator";

function App() {
  const userName = "Akbari";

  return (
    <>
      <h1 style={{textAlign:"center"}}>React with Maulik {userName}</h1> {/*its called expression*/}
      <Chai />
      <Calculator />
    </>
  );
}

export default App;
