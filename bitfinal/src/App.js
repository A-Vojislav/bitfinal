import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import SingleCandidate from "./components/pages/SingleCandidate";
import './App.css'
import ReportsHome from "./components/ReportsAdmin/ReportsHome";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/singlecandidate/:id' element={<SingleCandidate />} />
				<Route path='/reportsAdmin' element={<ReportsHome />} />
			</Routes>
		</div>
	);
}

export default App;
