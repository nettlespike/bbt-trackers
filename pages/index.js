import Head from 'next/head'
import React, {useState} from "react";
import Counter from '../components/counter';
import NavBar from '../components/navbar';
import { Bar } from 'react-chartjs-2';

export default function Home() {

  const roundToCent = (val) => {
    return Math.round((val + Number.EPSILON) * 100) / 100;
  }
  const getRandomNumber = (min, max) => {
    const ran = Math.random() * (max - min) + min;
    return roundToCent(ran);
  }

  const [bubbleTeaSpending, setBubbleTeaSpending]= useState([
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
    getRandomNumber(5, 20),
  ]); // in days

  var sum = 0;
  bubbleTeaSpending.forEach((value) => {
    sum += value;
  });

  sum = roundToCent(sum);

  const [moneySpent, setMoneySpent] = useState(sum);
  const [startingMoney, setStartingMoney] = useState(sum);
  const [input, setInput] = useState('');
  const [flag, setFlag] = useState(0);
  

  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: "Money Spent",
      data: [bubbleTeaSpending[0], bubbleTeaSpending[1], bubbleTeaSpending[2], bubbleTeaSpending[3], bubbleTeaSpending[4], bubbleTeaSpending[5], bubbleTeaSpending[6]],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }

  const addMoney = () => {
    if(!Number.isNaN(input) && !Number.isNaN(parseFloat(input))) {
      const currentTotal = moneySpent + parseFloat(input);
      const day = new Date().getDay();
      
      const tmpArray = bubbleTeaSpending;
      tmpArray[day] = bubbleTeaSpending[day] + parseFloat(input);

      setBubbleTeaSpending(tmpArray);
      
      if(flag == 0) {
        setStartingMoney(sum);
        setMoneySpent(currentTotal);
      }
      else {
        setStartingMoney(moneySpent);
        setMoneySpent(currentTotal);
      }
      setInput('');
      setFlag(flag + 1);
      // console.log(moneySpent);
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
          <div className="p-8">
            <Bar
              data={data}
              width={800}
              height={400}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
