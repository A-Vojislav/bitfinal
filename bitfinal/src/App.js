import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
	return (
		<div>
			<Routes>
<<<<<<< Updated upstream
        <Route path='/' element={<Home />} /> 
=======
				<Route path="/" element={<Header></Header>}></Route>
				<Route path="/" element={<Footer></Footer>}></Route>
>>>>>>> Stashed changes
			</Routes>
		</div>
	);
}

export default App;
