import React from 'react';

function Colorpalette(props) {
	return (
		<div className="color-palette">
			{props.filteredcolors.map((color, index) => {
				return (
					<div
						key={index}
						className="color-square btn"
						style={{ backgroundColor: color, margin: '2px' }}
						onClick={() => {
							return props.selectedcolor(color);
						}}
					/>
				);
			})}
		</div>
	);
}
export default Colorpalette;
