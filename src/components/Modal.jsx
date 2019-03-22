import React, { Component } from 'react';
import Colorpalette from './Colorpalette';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSelectedColor = this.handleSelectedColor.bind(this);
		this.state = {
			entry: 'entry',
			amount: 666,
			color: 'red'
		};
	}
	handleSelectedColor(e) {
		console.log(e);
		this.setState({ color: e });
	}
	handleOnChange(e) {
		e.target.name === 'newitem'
			? this.setState({ entry: e.target.value })
			: this.setState({ amount: e.target.value });
	}
	handleSubmit() {
		return this.props.handlesubmit(this.state);
	}
	render() {
		return (
			<div
				className="modal"
				onClick={event => {
					return event.target.className === 'modal'
						? this.props.handleshowmodal
						: null;
				}}>
				<div className="modal-form">
					<div className="modal-header">
						<h3>Available</h3>
						<h3>42</h3>
					</div>

					<form className="entry-form" onSubmit={this.handleSubmit}>
						<div className="input-frame-entry">
							<div
								className="color-square btn"
								style={{ backgroundColor: this.state.color }}
								onClick={this.props.handletogglecolorpalette}
							/>
							<input
								type="text"
								name="newitem"
								onChange={this.handleOnChange}
							/>
						</div>
						<div className="input-frame-amount">
							<input
								type="number"
								name="newvalue"
								onChange={this.handleOnChange}
							/>
						</div>
					</form>
					{/* color palette component */}
					{this.props.showcolorpalette && (
						<Colorpalette
							colorlist={this.props.colorlist}
							selectedcolor={this.handleSelectedColor}
						/>
					)}
					<div className="submit-wrapper">
						<div className="submit-btn" onClick={this.handleSubmit}>
							OK
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
