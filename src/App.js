import React, { Component } from 'react';
import Donutchart from './components/Donutchart';
import './styles/App.css';

class App extends Component {
	render() {
		const donutChart = {
			budget: 0,
			baseColor: '#dedede',
			thickness: '5',
			holeColor: '#ffffff',
			items: [
				{
					label: 'Food',
					sectionColor: 'red',
					amount: 375,
					startFrom: 25
				},
				{
					label: 'Electricity',
					sectionColor: 'blue',
					amount: 375,
					startFrom: 0
				},
				{
					label: 'Water',
					sectionColor: 'orange',
					amount: 375,
					startFrom: 0
				},
				{
					label: 'Fun',
					sectionColor: 'yellow',
					amount: 300,
					startFrom: 0
				},
				{
					label: 'Cats',
					sectionColor: 'black',
					amount: 25,
					startFrom: 0
				}
			]
		};

		const donutChart2 = {
			budget: 10000, //percentage of each item will be based on this number if set and if it's greater than the total of items
			baseColor: '#dadada', //this is the 100% base circle
			thickness: '5', // circle size
			holeColor: 'transparent', //the hole is transparent but it can be any color ex #ffffff
			items: [
				{
					label: 'Wolves', //label of the item
					sectionColor: 'green', //color of the sections
					amount: 666, //value of the section
					startFrom: 25 //first item should always have a startFrom value > 0, next items will have a startFrom 0
				},
				{
					label: 'Cats',
					sectionColor: 'red',
					amount: 127,
					startFrom: 0
				},
				{
					label: 'Hamsters',
					sectionColor: '#345abc',
					amount: 892,
					startFrom: 0
				},
				{
					label: 'Deers',
					sectionColor: 'pink',
					amount: 892,
					startFrom: 0
				}
			]
		};

		return (
			<div className="App">
				<div className="chart">
					<Donutchart chartfrom={donutChart} />
				</div>
				<div className="chart">
					<Donutchart chartfrom={donutChart2} />
				</div>
			</div>
		);
	}
}

export default App;
