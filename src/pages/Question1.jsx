import { Fragment } from 'react';
import '../App.css';
import OptionBox from '../components/OptionBox';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";


function Question1() {
  
    const questionsBG = styled.div `
        background-color: white;
        height: 100vh;
        width: 100vh;
    `;
  

  return (
    <Fragment>        
        <questionsBG>
      {/* Top Menu */}
      <div>
          <div className='questionNumber'><h1>Question 1 out of 27</h1></div>
          <div className='questionDetail'>Your Skin Concerns</div>         
      </div>
      
      {/* Home Text */}
        <div className='options-items'>
            <OptionBox option='Anti-aging' />
            <OptionBox option='Acne & Blemish' />
            <OptionBox option='Dryness' />
            <OptionBox option='Blackheads' />
            <OptionBox option='Dullness' />
            <OptionBox option='Dark Circles' />
            <OptionBox option='Redness' />
            <OptionBox option='Pores' />
            <OptionBox option='Sun Damage' />
            <OptionBox option='Sensitivity' />
            <OptionBox option='Uneven Skin Tone' />
            <OptionBox option='Puffiness' />
            <OptionBox option='Wrinkles and fine lines' />
            <OptionBox option='Loss of firmness' />
            <OptionBox option='Oiliness' />          
            
        </div> 
        <div className="navigatorButtons">
            <button className="btn-next" type="submit">Next</button>
        </div>
     </questionsBG>
    </Fragment>
  );
}

export default Question1;