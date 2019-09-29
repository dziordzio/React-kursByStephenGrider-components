// https://semantic-ui.com/ - stąd wzięto CDN do semantic.min.css
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		// tu albo nawiasy, albo w tej linii zaczynamy - <div className="ui container comments"></div>
		<div className="ui container comments">
			<ApprovalCard>Are you sure you want to do this?</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:33PM"
					blogText="Tekst jeden"
					fakerImageAvatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="aLEX"
					timeAgo="Today at 7:33PM"
					blogText="text dwa"
					fakerImageAvatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Today at 11:33PM"
					blogText="Tekscik trzy"
					fakerImageAvatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector("#root"));
