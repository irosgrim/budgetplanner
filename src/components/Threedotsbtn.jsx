import React from 'react';
import Settings from './Settings';

function Threedotsbtn(props) {
	return (
		<div
			className="three-dots-menu"
			onClick={e => {
				console.log(e.target.className);
				if (
					e.target.className === 'three-dots-menu' ||
					e.target.className === 'dot' ||
					e.target.className === 'dots-wrapper'
				) {
					return props.handleshowsettings();
				}
			}}>
			<div className="dots-wrapper">
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
			</div>
			{props.showsettings && (
				<Settings
					handleshowsettings={props.handleshowsettings}
					settings={props.settings}
					handlesubmitsettings={props.handlesubmitsettings}
				/>
			)}
		</div>
	);
}
export default Threedotsbtn;
