import React, {useState} from 'react';
import './App.css';
import {Button} from './components/styled/button.styled'
import {Input} from './components/styled/input.styled'
import {findCoinOutcomes} from './utils/helper/sampleSpace'

function App() {
  const [coinCount, setCoinCount] = useState<number>(0)
  const [outputSeq, setOutputSeq] = useState<string>('---')


  function headTailGuess(): string{
    return Math.round(Math.random()) === 0? 'H': 'T'
  }


  function sequenceGenerator() : void{
   let arr=[]
   for(let i=0;i<coinCount;i++){
     arr.push(headTailGuess())
   }
    setOutputSeq(arr.join())
  }
  

  return (
    <div className="App">
      <Input type="number" data-testid="input" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>
        {setCoinCount(parseInt(e.target.value))}} value={coinCount}></Input>
      <Button onClick={sequenceGenerator}>Flip</Button>
      <p>The total samplespace is <span data-testid="smaplespace">{findCoinOutcomes(coinCount)}</span></p>
      <p>The output of coin flip is <span>{outputSeq}</span></p>
   </div>
  );
}

export default App;
