import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Card2 from './components/card2.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  return(
    <>
    <div className="day-four">
      <Navbar/>
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
