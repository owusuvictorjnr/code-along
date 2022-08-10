import Header from "./components/Header";
import { Images } from "./components/Images";
import Button from "./components/Button";
import Navbar from './components/Navbar'

function App() {
  return(
    <div>
      <Navbar />
      <Header label="Add to Card"/>
      <Button label="Read More"/>
      <Button label={"Register"}/>
      <Button label="Login"/>
      <Button/>
      <Images />
    </div>

  ) 
}

export default App;