import React from 'react';
import {Doughnut, Bar} from 'react-chartjs-2';
import Navbar from '../components/navbar';
import {spendingData} from '../data/spendings.js'

export default function Spending() {
	
	var sum = 0;
	spendingData.forEach((value) => {
		sum = sum + value;
		sum = Math.round((sum + Number.EPSILON) * 100) / 100;
	});

	var budget = 200;
	var moneyLeft = 200 - sum;

	const budgetPercentage = Math.round((sum / 200 + Number.EPSILON) * 100)

	const donutData = {
		labels: [
			'Money Spent',
			'Money Left',
		],
		datasets: [{
			data: [sum, moneyLeft],
			backgroundColor: [
				'#FF6384',
				'rgba(75, 192, 192, 1)',
			],
			hoverBackgroundColor: [
				'#FF6384',
				'rgba(75, 192, 192, 1)',
			]
		}]
	};

	const barData = {
		labels: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		datasets: [{
			label: 'Money spent',
			data: spendingData,
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

	return (
		<>
			<Navbar></Navbar>
			<div className="flex flex-col items-center pt-16 ">
				<div className="w-1/3 p-8">
					<Doughnut
						data={donutData}
					>
					</Doughnut>
				</div>
				<p className="text-xl">{budgetPercentage}% of Budget Used</p>
				<div className="w-1/2 p-8">
					<Bar
						data={barData}
					>
					</Bar>
				</div>
			</div>
		</>
	)
}