import { Link } from 'react-router-dom';
export function Menu() {
	return (
		<ul className="lg:flex gap-8 text-xl hidden">
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
	);
}
