import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";
import { AiFillSetting } from "react-icons/ai";
import Options from "./Options";

function Start() {
	const navigate = useNavigate();
	const [options, setOptions] = useState();
	const [formValues, setFormValues] = useState();
	const initialValues = {
		amount: 10,
		category: "any",
		difficulty: "any",
		type: "any",
	};
	const [saveButton, setSaveButton] = useState(true);
	function handleSubmit() {
		navigate("/quiz");
		if (formValues) {
			sessionStorage.setItem("options", JSON.stringify(formValues));
		} else {
			sessionStorage.setItem("options", JSON.stringify(initialValues));
		}
	}
	function handleOptions() {
		setOptions(true);
		setSaveButton(true);
	}

	return (
		<div className="start-container">
			<h1 className="start-title">Test your knowledge</h1>
			<button type="submit" className="start-btn" onClick={handleSubmit}>
				Start quiz
			</button>

			<button
				type="submit"
				className="option-btn"
				onClick={() => {
					handleOptions();
				}}
			>
				{" "}
				Options
				<AiFillSetting style={{ width: "25px", height: "25px" }} />
			</button>
			{options && saveButton && (
				<Options
					callback={(state) => {
						setFormValues(state);
					}}
					saveBtn={(state) => setSaveButton(state)}
				/>
			)}
		</div>
	);
}

export default Start;
