import React, { Component } from 'react';

class List extends Component {
	render() {
		const { budget } = this.props;
		const amountarr = [];

		for (let val in budget.items) {
			amountarr.push(budget.items[val].amount);
		}
		const total = (tot, current_val) => {
			return (tot += current_val);
		};

		return (
			<div className="info">
				<ul className="info-list">
					<li className="list-item">
						<div className="list-item-wrapper">
							<div
								className="color-square"
								style={{
									backgroundColor: budget.baseColor
								}}
							/>
							<div className="item thin">{budget.title}</div>
						</div>
						<div className="bold">{budget.budget}</div>
					</li>
					{budget.items.map((item, index) => {
						return (
							<li key={index} className="list-item">
								<div className="list-item-wrapper">
									<div
										className="color-square"
										style={{
											backgroundColor: item.sectionColor
										}}
									/>
									<div className="item thin">{item.label}</div>
								</div>
								<div className="bold">{item.amount}</div>
							</li>
						);
					})}
				</ul>
				<div className="list-total">
					<div className="item bold">TOTAL</div>
					<div className="bold">{amountarr.reduce(total)}</div>
				</div>
			</div>
		);
	}
}

export default List;
