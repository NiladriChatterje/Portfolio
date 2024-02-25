import { useEffect } from 'react'
import './App.css'
import { Navbar, Introduction, Academics, Divider } from './Components';
import { NavbarDesign, BackgroundSVG } from './assets';

function App() {

  useEffect(() => {
    const path: HTMLElement | any = document.getElementsByClassName("path");

    for (let i of path) {
      i.style.strokeDasharray = i.getTotalLength();
      i.style.strokeDashoffset = i.getTotalLength();
    }

    window.addEventListener('scroll', () => {
      for (let i of path) {
        i.style.strokeDasharray = i.getTotalLength() + i.getTotalLength() * (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) + 'px ';
        i.style.strokeDashoffset = i.getTotalLength();
      }
    });
  }, []);


  return (
    <>
      <NavbarDesign />
      {<BackgroundSVG />}
      <Navbar />
      <div id={'root'}>
        <Introduction />
        <Divider />
        <Academics />
      </div>
    </>
  )
}

export default App
