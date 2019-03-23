import React, { Component } from 'react';
import Donutchart from './components/Donutchart';
import Modal from './components/Modal';
import List from './components/List';
import Setup from './components/Setup';

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
		this.handlePercentage = this.handlePercentage.bind(this);
		this.handleSubmitSetup = this.handleSubmitSetup.bind(this);
		this.state = {
			title: 'Budget',
			dataType: '$',
			budget: 420,
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
			percent: 100,
			chosenColors: [],
			showSetup: true,
			showColorPalette: false,
			showModal: false,
			showSettings: false
		};
	}
	handleSubmitSetup(e) {
		console.log(e);
		this.setState({
			title: e[0],
			budget: e[1],
			dataType: e[2],
			baseColor: e[3],
			thickness: e[4],
			showSetup: false
		});
	}
	handlePercentage(e) {
		console.log(e);
	}
	handleShowSettings() {
		this.setState(prevState => ({
			showSettings: !prevState.showSettings
		}));
	}
	handleSubmit(e) {
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
			this.state.items[0].amount === null &&
			e.entry !== '' &&
			e.color !== '' &&
			e.amount !== '' &&
			e.amount !== 0
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

		const amountarr = [];

		for (let val in this.state.items) {
			amountarr.push(this.state.items[val].amount);
		}
		const total = (tot, current_val) => {
			return (tot += current_val);
		};
		const totalAmount = amountarr.reduce(total);
		const availableAmount = this.state.budget - totalAmount;
		const totalPercent = (
			((this.state.budget - totalAmount) * 100) /
			this.state.budget
		).toFixed(1);
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
						availableamount={availableAmount}
					/>
				)}
				{this.state.showSetup && (
					<Setup
						setup={{
							title: this.state.title,
							dataType: this.state.dataType,
							total: this.state.budget,
							basecolor: this.state.baseColor,
							thickness: this.state.thickness
						}}
						handlesubmitsetup={this.handleSubmitSetup}
					/>
				)}
				<Additem handleshowmodal={this.handleShowModal} />
				<Threedotsbtn
					showsettings={this.state.showSettings}
					handleshowsettings={this.handleShowSettings}
					settings={{
						title: this.state.title,
						dataType: this.state.dataType,
						total: this.state.budget,
						basecolor: this.state.baseColor,
						thickness: this.state.thickness
					}}
					handlesubmitsettings={this.handleSubmitSetup}
				/>
				<div className="chart">
					<div className="chart-infobox">
						{this.state.budget > 0 ? (
							<p className="infobox-text">{`${totalPercent}% out of`}</p>
						) : null}
						{this.state.budget > 0 ? (
							<p className="infobox-amount">{this.state.budget}</p>
						) : (
							<p className="infobox-amount">{totalAmount}</p>
						)}
						{this.state.dataType !== '' ? (
							<p className="infobox-text">{this.state.dataType}</p>
						) : null}
					</div>
					<Donutchart
						chartfrom={this.state}
						title="Budget"
						infoposition="none"
						percentage={this.handlePercentage}
					/>
				</div>
				<List budget={this.state} />
			</div>
		);
	}
}

export default App;
