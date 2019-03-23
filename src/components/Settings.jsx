import React, { Component } from 'react';

export default class Settings extends Component {
	render() {
		return (
			<div className="settings-window">
				<ul>
					<li>Title</li>
					<li>Total amount</li>
					<li>Chart thickness</li>
					<li>Base color</li>
					<li>Hole color</li>
				</ul>
				<div className="submit-wrapper">
					<div className="submit-btn" onClick={this.props.handleshowsettings}>
						CANCEL
					</div>

					<div className="submit-btn">OK</div>
				</div>
			</div>
		);
	}
}
