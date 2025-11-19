import {useState} from 'react';

function ChallengeB(){
    const[count,setCount]=useState(0);

    function add(){
        if(count<10){
            setCount(count+1);
        }
    }
    function subtract(){
        if(count>0){
            setCount(count-1);
        }
    }

    function msg(){
        if(count==0){
            return <p>Starting program</p>
        }
        else if(count==5){
            return <p>Halfway point reached</p>
        }
        else if(count==10){
            return <p>program has ended</p>
        }
        else{
            return <p></p>
        }
    }

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={add} style={{backgroundColor:count==0? 'red':
                'green'
            }}> + </button>
            <p>{count} {msg()}</p>
            <button onClick={subtract} style={{backgroundColor:count==10? 'red':
                'green'
            }}> - </button>
        </div>
    );
}
export default ChallengeB;