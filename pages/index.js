import Head from 'next/head'
import React, {useState} from "react";
import Counter from '../components/counter';
import NavBar from '../components/navbar';

export default function Home() {
  
  const [moneySpent, setMoneySpent] = useState(0);
  const [startingMoney, setStartingMoney] = useState(0);
  const [input, setInput] = useState('');
  const [flag, setFlag] = useState(0);

  const addMoney = () => {
    if(!Number.isNaN(input)) {
      const tmp = moneySpent + parseFloat(input);
      if(moneySpent == 0 && startingMoney == 0) {
        setStartingMoney(0);
        setMoneySpent(tmp);
      }
      else {
        setStartingMoney(moneySpent);
        setMoneySpent(tmp);
      }
      setInput('');
      setFlag(flag + 1);
      //console.log(moneySpent);
    }
  }

  return (
    <div className="overflow-x-hidden">


      <Head>
        <title>BBT Trackers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <NavBar></NavBar>

      <div className="relative bg-white flex justify-center w-screen">
        <div className="flex flex-col justify-start space-y-24 pt-32 z-10">
          <div className="flex flex-col text-center">
            <div className="text-9xl text-indigo-800">
              <Counter key={flag} startingMoney={startingMoney} total={moneySpent}/>
            </div>
            <p className="text-md font-serif">Spent on Bubble Tea So Far</p>
          </div>

          <div className="space-y-6">
            <p className="text-2xl">How much did you spend on Bubble Tea today?</p>
            <div className="flex flex-row space-x-6">
              <input 
                className="w-full border-2 border-gray-300 rounded-xl text-4xl p-2"
                type="text"
                placeholder="I've spent..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if(e.key === "Enter") {
                    console.log("enter key");
                    addMoney();
                  }
                 }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
