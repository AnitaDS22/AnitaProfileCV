import './App.css'
import Navbar from './componests/Navbar'
import Button from './componests/Button'
import Body from './componests/Body'
import { Route, Link, Routes} from "react-router-dom"
import AboutMe from './componests/AboutMe'
import ContactMe from './componests/ContactMe'
import Works from './componests/Works'
import Skills from './componests/Skills'





function App() {


  return (
    < >
    <div className='divPrincipal'>
< Navbar />

<Link to="/"> <h1 className='nombre'>Anabel DS</h1> </Link>
<Routes>

<Route path="/" element = {<Body/>} />
<Route path="/AboutMe" element = {<AboutMe />}/>
<Route path="/ContactMe" element = {<ContactMe />}/>
<Route path="/Works" element = {<Works />}/>
<Route path="/Skills" element = {<Skills />}/>

 </Routes>

  
 <Link to="/Works"> <Button texto= "Works" /> </Link>
 <Link to="/AboutMe"> <Button texto= "About me" /> </Link>
 <Link to="/ContactMe"> <Button texto= "Contact me" /> </Link>





     </div>



    </>
  )
}

export default App
