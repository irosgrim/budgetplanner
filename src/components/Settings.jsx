import React, { Component } from 'react';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleVisible: false,
            totalVisible: false,
            dataTypeVisible: false,
            thicknessVisible: false,
            baseColorVisible: false,
            holeColorVisible: false
        };
        this.onSubmitSettings = this.onSubmitSettings.bind(this);
        this.handleToggleSettings = this.handleToggleSettings.bind(this);
    }
    handleToggleSettings() {
        return this.props.handleshowsettings();
    }
    onSubmitSettings(e) {
        e.preventDefault();
        const formValues = [
            e.target[0].value,
            Number(e.target[1].value),
            e.target[2].value,
            e.target[3].value,
            Number(e.target[4].value)
        ];
        this.handleToggleSettings();
        return this.props.handlesubmitsettings(formValues);
    }
    render() {
        const {
            title,
            dataType,
            total,
            basecolor,
            thickness
        } = this.props.settings;
        return (
            <div className="settings-window">
                <form onSubmit={this.onSubmitSettings}>
                    <ul>
                        <li
                            onClick={() => {
                                return this.setState({
                                    titleVisible: !this.state.titleVisible
                                });
                            }}>
                            Title
                        </li>
                        <input
                            autoComplete="off"
                            name="title"
                            type="text"
                            placeholder="title"
                            defaultValue={title}
                            style={
                                this.state.titleVisible
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        />
                        <li
                            onClick={() => {
                                return this.setState({
                                    totalVisible: !this.state.totalVisible
                                });
                            }}>
                            Total amount
                        </li>
                        <input
                            autoComplete="off"
                            name="total"
                            type="number"
                            placeholder="amount"
                            defaultValue={total}
                            style={
                                this.state.totalVisible
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        />
                        <li
                            onClick={() => {
                                return this.setState({
                                    dataTypeVisible: !this.state.dataTypeVisible
                                });
                            }}>
                            Data type
                        </li>
                        <input
                            autoComplete="off"
                            name="datatype"
                            type="text"
                            placeholder="datatype"
                            defaultValue={dataType}
                            style={
                                this.state.dataTypeVisible
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        />
                        <li
                            onClick={() => {
                                return this.setState({
                                    baseColorVisible: !this.state
                                        .baseColorVisible
                                });
                            }}>
                            Base color
                        </li>
                        <input
                            autoComplete="off"
                            name="basecolor"
                            type="text"
                            placeholder="base color"
                            defaultValue={basecolor}
                            style={
                                this.state.baseColorVisible
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        />

                        <li
                            onClick={() => {
                                return this.setState({
                                    thicknessVisible: !this.state
                                        .thicknessVisible
                                });
                            }}>
                            Chart thickness
                        </li>
                        <input
                            name="thickness"
                            type="range"
                            defaultValue={thickness}
                            max="10"
                            style={
                                this.state.thicknessVisible
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        />
                    </ul>
                    <div className="submit-wrapper">
                        <button
                            className="submit-btn"
                            onClick={this.props.handleshowsettings}>
                            CANCEL
                        </button>

                        <button className="submit-btn" type="submit">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
