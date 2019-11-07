import React, { useState } from "react";

const ConverterInput = (props) => {
	// handleChange(event) {
	// 	this.setState({ value: event.target.value });
	// }
	const [value, handleChange] = useState("");

	return (
		<div>
			<input
				type="text"
				placeholder="0"
				value={props.valueSrc}
				onChange={(event) => {
					props.functionSrc(event.target.value);
					props.className === "src" ?
						props.functionDest(event.target.value * 1.139283) :
						props.functionDest(event.target.value / 1.139283)

					console.log(event.target.value)
				}}
			/>
			<select value={value} onChange={(event) => {
				handleChange(event.target.value)
			}}>
				<option value="grapefruit">Grapefruit</option>
				<option value="lime">Lime</option>
				<option value="coconut">Coconut</option>
				<option value="mango">Mango</option>
			</select >

		</div >);
};

export default ConverterInput;