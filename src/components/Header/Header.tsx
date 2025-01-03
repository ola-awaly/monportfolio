import { Link } from 'react-router-dom';
import { Logo } from './Logo';
export function Header() {
	return (
		<header className=" flex flex-row justify-evenly items-center">
			<Logo />
			<ul className="flex gap-8 text-xl">
				<li>
					<Link to="about-me">Moi</Link>
				</li>
				<li>
					<Link to="my-education">Mon éducation</Link>
				</li>
				<li>
					<Link to="my-experience">Mon expérience</Link>
				</li>
				<li>
					<Link to="my-projects">Mes projets</Link>
				</li>
			</ul>
		</header>
	);
}
