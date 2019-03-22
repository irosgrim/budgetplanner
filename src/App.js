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
		this.handleShowSettings = this.handleShowSettings.bind(this);
		this.state = {
			title: 'Budget',
			budget: 22000,
			baseColor: '#e8e8e8',
			thickness: '5',
			holeColor: 'transparent',
			items: [
				{
					label: '',
					sectionColor: '',
					amount: null,
					startFrom: 25
				}
			],
			chosenColors: [],
			showColorPalette: false,
			showModal: false,
			showSettings: false
		};
	}
	handleShowSettings() {
		this.setState(prevState => ({
			showSettings: !prevState.showSettings
		}));
	}
	handleSubmit(e) {
		console.log(e);
		const capitalizeLabel =
			e.entry.charAt(0).toUpperCase() + e.entry.toLowerCase().substring(1);
		const newEntry = {
			label: capitalizeLabel,
			sectionColor: e.color,
			amount: Number(e.amount),
			startFrom: 0
		};
		e.entry !== '' && e.color !== '' && e.amount !== '' && e.amount !== 0
			? this.setState({
					items: [...this.state.items, newEntry],
					chosenColors: [...this.state.chosenColors, e.color],
					showModal: false,
					showColorPalette: false
			  })
			: this.setState({ showModal: false });

		if (
			this.state.items.length === 1 &&
			this.state.items[0].label === '' &&
			this.state.items[0].amount === null
		) {
			this.setState({
				items: [
					{
						label: capitalizeLabel,
						sectionColor: e.color,
						amount: Number(e.amount),
						startFrom: 25
					}
				],
				chosenColors: [...this.state.chosenColors, e.color],
				showModal: false,
				showColorPalette: false
			});
		}
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
		const filtered = colorList.filter(color => {
			return !this.state.chosenColors.includes(color);
		});
		return (
			<div className="App">
				{this.state.showModal && (
					<Modal
						handletogglecolorpalette={this.handleToggleColorPalette}
						showcolorpalette={this.state.showColorPalette}
						colorlist={colorList}
						chosencolors={this.state.chosenColors}
						handleshowmodal={this.handleShowModal}
						handlesubmit={this.handleSubmit}
						filteredcolors={filtered}
					/>
				)}

				<Additem handleshowmodal={this.handleShowModal} />
				<Threedotsbtn
					showsettings={this.state.showSettings}
					handleshowsettings={this.handleShowSettings}
				/>
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
