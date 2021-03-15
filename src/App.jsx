import React from 'react';


const SlotM = (props) =>{
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    if((props.x===props.y) && (props.y===props.z) && (props.z===props.x))
    {
        return (
            <>
                <div className = "slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is Matching</h1>
                

                </div>
            </>
        );
    }
    else{
        return (
            <>
                <div className = "slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is Not Matching</h1>
               

                </div>
            </>
        );
    }
}
const App = () =>{
    return(
        <>
            <h1 className="heading_style"> 
            🎰 Welcome to  <span style={{fontWeight : 'bold'}}>Slot Machine Game</span> 🎰</h1>

            <div className='slotmachine'>
            <SlotM x='😄'  y='😄'  z='😄' />
            <hr />
            <SlotM x='😄'  y='😸'  z='😃'/>
            <hr />
            <SlotM x='🃏'  y='👹'  z='😈' />
           
            </div>
        </>

    );
}

export default App;