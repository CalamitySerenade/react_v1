import React from 'react'

function card(){
  const [x,setx]=React.useState(0);
  
  function add(){
    setx(x+1);
  }
  return (
    <>
      <div>
        <p>
          This is my card
          <p>{x}</p>

          {/*Note 2, day 2: Instead of using getElementById/Class/Tag and 
          adding an event listener, I Can directly use 
          onClick to trigger a function*/}
          {/*Note 3,day 2: When calling a function in JSX, you
           do not use parenthesis*/}
          <button onClick={add}>Increase number</button>
        </p>
      </div>
    </>
  )
}

export default card;