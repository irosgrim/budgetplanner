import React, { Component } from 'react';

class Setup extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { thickness: null };
	}
	componentDidMount() {
		this.setState({ thickness: this.props.setup.thickness });
	}
	handleSubmit(e) {
		e.preventDefault();
		const formValues = [
			e.target[0].value,
			Number(e.target[1].value),
			e.target[2].value,
			e.target[3].value,
			Number(e.target[4].value)
		];
		console.log(formValues);

		return this.props.handlesubmitsetup(formValues);
	}
	render() {
		const { title, dataType, total, basecolor, thickness } = this.props.setup;
		console.log(title, dataType, total, basecolor, thickness);
		return (
			<div>
				<div className="setup-window">
					<form className="default-window" onSubmit={this.handleSubmit}>
						<h3>Initial setup</h3>
						<div className="input-wrapper">
							<p>Title</p>
							<input
								autoComplete="off"
								type="text"
								name="title"
								placeholder="title"
								defaultValue={title}
							/>
						</div>
						<div className="input-wrapper">
							<p>Total</p>
							<input
								autoComplete="off"
								type="text"
								name="total"
								placeholder="total budget"
								defaultValue={total}
							/>
						</div>
						<div className="input-wrapper">
							<p>Data type</p>
							<input
								autoComplete="off"
								type="text"
								name="datatype"
								placeholder="total budget"
								defaultValue={dataType}
							/>
						</div>

						<div className="input-wrapper">
							<p>Base color</p>
							<input
								autoComplete="off"
								type="text"
								name="basecolor"
								placeholder="#e8e8e8"
								defaultValue={basecolor}
							/>
						</div>
						<div className="input-wrapper">
							<p>Chart thickness({this.state.thickness})</p>
							<input
								type="range"
								name="thickness"
								min="2"
								max="10"
								defaultValue={thickness}
								onChange={e => {
									this.setState({ thickness: e.target.value });
								}}
							/>
						</div>
						<div className="input-wrapper">
							<p />
							<div className="setup-btns">
								<button className="submit-btn" type="submit">
									OK
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default Setup;
