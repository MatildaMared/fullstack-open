import React from "react";

const Notification = ({ message, isSuccessMessage }) => {
	if (message === null) {
		return null;
	}

	return (
		<p className={`notification ${isSuccessMessage ? "success" : "error"}`}>
			{message}
		</p>
	);
};

export default Notification;
