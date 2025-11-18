import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/card2.jsx'
import Navbar from './components/navbar.jsx'
import Card3 from './components/Card3.jsx';

function App() {
  return(
    <>
    <div className="day-four-one">
      <Navbar/>
    </div>
    <div className="day-four-two">
    <Card3
      product="Nike Air Max"
      desc="comfortable running shoes"
      price="$139.99"
      src="https://www.bing.com/th?id=OPHS.nuzf8S%2bR3S9uhg474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=0.9&c=17&pcl=f5f5f5"/>
    </div>

    <div className="day-one">
      <h3>
        Day 1 - Intro to react
      </h3>
      <h3>
        This is my first day with react!
      </h3>
      <p>
        Wilson Garate
      </p>
    </div>

    <div className="day-two">
      <h3>
        Day 2 - Components
      </h3>
      <Card/>
    </div>

    <div className="day-three">
      <h3>
        Day 3 - Props and State
      </h3>
      <Card2 stu_name={"Issac Santos"} stu_class={"Adv Prog"} stu_exam={"react day-1"} stu_grade={78}/>
      <Card2 stu_name={"Jazilyn Velasco"} stu_class={"Adv Prog"} stu_exam={"react day-3"} stu_grade={80}/>
      <Card2 stu_name={"Jared Meza"} stu_class={"Adv Prog"} stu_exam={"react day-2"} stu_grade={100}/>
      <Card2 stu_name={"Bryan Alves"} stu_class={"Adv Prog"} stu_exam={"react day-1"} stu_grade={0}/>
      <Card2 stu_name={"Mateus Souza"} stu_class={"Adv Prog"} stu_exam={"react day-4"} stu_grade={95}/>
    </div>
    </>
  )
}

export default App
