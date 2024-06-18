import './App.css'
import Discription from './Components/Discription'
import FadeAnimation from './Components/FadeAnimation'
import Navbar from './Components/Navbar'
import ButtonWithRotation from './Components/RotateButtonAnimation'
// import RotateButtonAnimation from './Components/RotateButtonAnimation'
import CourseList from './Components/Slide-animation'



function App() {

  return (
    <>
    <Navbar/>
    <h1 className='w-full text-center text-[30px] border'>Task 1 Fade animation</h1>
    <FadeAnimation/>
    <h1 className='w-full text-center text-[30px] border'>Task 2 slide animation</h1>
    <CourseList/>
    <h1 className='w-full text-center text-[30px] border'>Task 3 Rotate Button animation</h1>
    <ButtonWithRotation/>
    <Discription/>
    </>
  )
}

export default App
