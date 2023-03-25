import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import SingleCandidate from "./components/SingleCandidate";
import './App.css'

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/singlecandidate/:id' element={<SingleCandidate />} />
			</Routes>
		</div>
	);
}

export default App;
