import React, { Component } from 'react';
import Donutchart from './components/Donutchart';
import Modal from './components/Modal';
import List from './components/List';

import Threedotsbtn from './components/Threedotsbtn';
import Additem from './components/Additem';
import './styles/App.css';
const colorList = [
	'#D0021B',
	'#F5A623',
	'#F8E71C',
	'#8B572A',
	'#7ED321',
	'#417505',
	'#BD10E0',
	'#9013FE',
	'#4A90E2',
	'#50E3C2',
	'#B8E986',
	'#4A4A4A',
	'#9B9B9B',
	'#EF0ACF',
	'#00AA80',
	'#AB5B09'
];

class App extends Component {
	constructor() {
		super();
		this.handleToggleColorPalette = this.handleToggleColorPalette.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			title: 'Budget',
			budget: 22000,
			baseColor: '#e8e8e8',
			thickness: '5',
			holeColor: 'transparent',
			items: [
				{
					label: 'Food',
					sectionColor: '#8acc81',
					amount: 8500,
					startFrom: 25
				}
			],

			showColorPalette: false,
			showModal: false
		};
	}

	handleSubmit(e) {
		console.log(e);

		const newEntry = {
			label: e.entry,
			sectionColor: e.color,
			amount: Number(e.amount),
			startFrom: 0
		};
		this.setState({ items: [...this.state.items, newEntry], showModal: false });
	}
	handleToggleColorPalette() {
		this.setState(prevState => ({
			showColorPalette: !prevState.showColorPalette
		}));
	}
	handleShowModal() {
		this.setState(prevState => ({
			showModal: !prevState.showModal
		}));
	}
	render() {
		return (
			<div className="App">
				{this.state.showModal && (
					<Modal
						handletogglecolorpalette={this.handleToggleColorPalette}
						showcolorpalette={this.state.showColorPalette}
						colorlist={colorList}
						handleshowmodal={this.handleShowModal}
						handlesubmit={this.handleSubmit}
					/>
				)}
				<Additem handleshowmodal={this.handleShowModal} />
				<Threedotsbtn />
				<div className="chart">
					<Donutchart
						chartfrom={this.state}
						title="Budget"
						infoposition="none"
					/>
				</div>
				<List budget={this.state} />
			</div>
		);
	}
}

export default App;
