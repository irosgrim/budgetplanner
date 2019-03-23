import React, { Component } from 'react';

class Donutchart extends Component {
	constructor(props) {
		super(props);

		this.handleSectionSize = this.handleSectionSize.bind(this);
	}

	handleSectionSize(amount) {
		const amountarr = [];
		for (let val in this.props.chartfrom.items) {
			amountarr.push(this.props.chartfrom.items[val].amount);
		}
		const reducer = (tot, current_val) => {
			return (tot += current_val);
		};

		const total =
			this.props.chartfrom.budget !== 0 &&
			this.props.chartfrom.budget !== null &&
			this.props.chartfrom.budget !== undefined &&
			this.props.chartfrom.budget > amountarr.reduce(reducer)
				? this.props.chartfrom.budget
				: amountarr.reduce(reducer);
		const slice = ((100 * amount) / total).toFixed(1);
		const arr = slice + ' ' + (100 - slice);
		return arr;
	}
	render() {
		const { baseColor, thickness, holeColor } = this.props.chartfrom;
		//make a copy of the items array props
		const circleArr = JSON.parse(JSON.stringify(this.props.chartfrom.items));
		let sections = [];
		//calculate section size for each item
		for (let key in circleArr) {
			if (circleArr.hasOwnProperty(key)) {
				circleArr[key].amount = this.handleSectionSize(circleArr[key].amount);
				if (key > 0) {
					//calculate section position based on the first section
					circleArr[key].startFrom =
						100 -
						parseFloat(circleArr[key - 1].amount.split(' ')[0]) +
						circleArr[key - 1].startFrom;
				}
				sections = [...sections, circleArr[key]];
			}
		}

		const circles = sections.map((circle, index) => {
			return (
				<circle
					key={index}
					id={circle.label + '_' + index}
					className="donut-segment"
					cx="21"
					cy="21"
					r="15.91549430918954"
					fill="transparent"
					stroke={circle.sectionColor}
					strokeWidth={this.props.chartfrom.thickness}
					strokeDasharray={circle.amount}
					strokeDashoffset={circle.startFrom}
				/>
			);
		});
		const amountarr = [];

		for (let val in this.props.chartfrom.items) {
			amountarr.push(this.props.chartfrom.items[val].amount);
		}
		const total = (tot, current_val) => {
			return (tot += current_val);
		};
		const infobox = () => {
			return (
				<div className="info">
					<ul className="info-list" style={{ listStyleType: 'none' }}>
						<li>
							<h3>
								{this.props.title}
								{/* this.props.chartfrom.budget < amountarr.reduce(total)
						? amountarr.reduce(total)
						: amountarr.reduce(total) +
						  ' out of ' +
						  this.props.chartfrom.budget */}
							</h3>
							<div style={{ fontWeight: '500' }}>
								{this.props.chartfrom.budget || ''}
							</div>
						</li>
						{sections.map((item, index) => {
							return (
								<li
									key={index}
									style={{ display: 'flex', alignItems: 'center' }}>
									<div
										className="thin"
										style={{ display: 'flex', alignItems: 'center' }}>
										<div
											style={{
												height: '10px',
												width: '10px',
												marginRight: '10px',
												borderRadius: ' 3px',
												backgroundColor: item.sectionColor
											}}
										/>
										{item.label}
									</div>

									<div className="bold">
										{this.props.chartfrom.items[index].amount}
									</div>

									{/* +
							' ' +
							this.props.chartfrom.items[index].amount +
							` (${item.amount.split(' ')[0]}%)` */}
								</li>
							);
						})}
						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								borderTop: '1px solid #eaeaea',
								paddingTop: '5px',
								marginTop: '5px'
							}}>
							<div>
								<div
									style={{
										float: 'left',
										height: '10px',
										width: '10px',
										marginRight: '10px',
										borderRadius: ' 3px'
									}}
								/>
								TOTAL:
							</div>
							<div>{amountarr.reduce(total)}</div>
						</li>
					</ul>
				</div>
			);
		};
		return (
			<div
				className="donut-chart"
				style={{
					display: 'flex',
					flexDirection:
						this.props.infoposition === 'bottom' ? 'column' : 'row',
					justifyContent: 'center',
					alignItems: 'flex-end'
				}}>
				{this.props.infoposition === 'left' && infobox()}

				<svg
					width="100%"
					height="100%"
					viewBox="0 0 42 42"
					className="donut"
					style={{
						strokeWidth: '0px',
						backgroundImage:
							'linear-gradient(-180deg, #E7F6FA 20%, #FFFFFF 55%)'
					}}>
					<circle
						className="donut-hole"
						cx="21"
						cy="21"
						r="15.91549430918954"
						fill={holeColor}
					/>
					<circle
						className="donut-ring base"
						cx="21"
						cy="21"
						r="15.91549430918954"
						fill="transparent"
						stroke={baseColor}
						strokeWidth={thickness}
					/>
					{circles}

					<g className="main-label">
						<text x="50%" y="50%" dx="-1px">
							{/* this.props.chartfrom.budget < amountarr.reduce(total)
								? amountarr.reduce(total)
								: this.props.chartfrom.budget */}
						</text>
					</g>
				</svg>
				{(this.props.infoposition === 'right' ||
					this.props.infoposition === ' ' ||
					this.props.infoposition === undefined ||
					this.props.infoposition === null ||
					this.props.infoposition === 'bottom') &&
					infobox()}
			</div>
		);
	}
}
export default Donutchart;
