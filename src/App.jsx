import Adapt from "./components/adapt/Adapt"
import Card from "./components/card/Card"
import Contact from "./components/contact/Contact"
import Finish from "./components/finish/Finish"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Price from "./components/price/Price"
import Rule from "./components/rule/Rule"
import Templete from "./components/templete/Templete"
import Templetes from "./components/templetes/Templetes"

function App() {

  return (
    <>
     <Nav/>
     <Header/>
     <Price/>
     <Templete/>
     <Rule/>
     <Templetes/>
     <Adapt/>
     <Card/>
     <Contact/>
     <Finish/>
    </>
  )
}

export default App
