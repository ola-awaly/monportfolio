import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
function App() {
	return (
		<div className=" bg-gradient-to-tr from-customDark to-customLight min-h-screen w-full text-textLight flex flex-col justify-between">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
