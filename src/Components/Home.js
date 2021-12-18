import * as React from 'react';
import './css/style.css';
import background from './image/background.png';



function Home(){
    
    return(
        <React.Fragment>
            <div className='row'>
                <div className='col' id='picside'>
                    <img src={background} alt='background' width='1000px'/>
                </div>
                <div className='col' id='titlewelcome'>
                    Make Your Own Card
                </div>
            </div>
          
        </React.Fragment>
 
    )
}



export default Home;