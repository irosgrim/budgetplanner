import React, { Component } from 'react';
import Donutchart from './components/Donutchart';
import './styles/App.css';

class App extends Component {
	render() {
		const budget = {
			budget: 22000,
			baseColor: '#e8e8e8', //this is the 100% base circle
			thickness: '5', // circle size
			holeColor: 'transparent', //the hole is transparent but it can be any color ex #ffffff
			items: [
				{
					label: 'Food', //label of the item
					sectionColor: '#8acc81', //color of the sections
					amount: 8500, //value of the section
					startFrom: 25 //first item should always have a startFrom value > 0, next items will have a startFrom 0
				},
				{
					label: 'Bank',
					sectionColor: '#e77d53',
					amount: 5500,
					startFrom: 0
				},
				{
					label: 'Electricity',
					sectionColor: '#bd53e7',
					amount: 750,
					startFrom: 0
				},
				{
					label: 'Water',
					sectionColor: '#6ea4b4',
					amount: 558,
					startFrom: 0
				},
				{
					label: 'Other stuff',
					sectionColor: '#e7b853',
					amount: 1500,
					startFrom: 0
				}
			]
		};

		return (
			<div className="App">
				<div className="chart">
					<Donutchart chartfrom={budget} title="Budget" infoposition="left" />
				</div>
			</div>
		);
	}
}

export default App;
