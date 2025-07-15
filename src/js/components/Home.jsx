import React from "react";
import { Todo } from "./Todo";
import { Todolist } from "./Todolist";
//create your first component
const Home = () => {
	return (
		<section>
			<Todolist></Todolist>
		</section>
	);
};

export default Home;