import React, { Component } from 'react';

export default class Settings extends Component {
	render() {
		return (
			<div className="settings-window">
				<ul>
					<li>
						Title: <input type="text" />
					</li>
					<li>
						Total amount: <input type="text" />
					</li>
					<li>
						Chart thickness: <input type="text" />
					</li>
					<li>
						Base color: <input type="text" />
					</li>
					<li>
						Hole color: <input type="text" />
					</li>
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
