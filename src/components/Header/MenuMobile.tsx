import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
interface MobileMenuProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>; // Type de setState
	isOpen: boolean; // État actuel du menu
}
export function MenuMobile({ isOpen = false, setIsOpen }: MobileMenuProps) {
	return (
		<ul
			className={`menu-container absolute top-0 right-0 bg-customLight text-white text-xl flex flex-col gap-4 p-4 transform transition-transform ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
			style={{ height: '100vh', width: '75vw' }}
		>
			<li>
				<Link
					to="about-me"
					onClick={() => setIsOpen(false)}
					className="block p-2 rounded-md transition-colors duration-200 hover:bg-white  hover:text-customLight focus:outline-none focus:ring-2 focus:ring-yellow-300"
				>
					Moi
				</Link>
			</li>
			<li>
				<Link
					to="my-education"
					onClick={() => setIsOpen(false)}
					className="block p-2 rounded-md transition-colors duration-200 hover:bg-white  hover:text-customLight focus:outline-none focus:ring-2 focus:ring-yellow-300"
				>
					Mon éducation
				</Link>
			</li>
			<li>
				<Link
					to="my-experience"
					onClick={() => setIsOpen(false)}
					className="block p-2 rounded-md transition-colors duration-200 hover:bg-white  hover:text-customLight focus:outline-none focus:ring-2 focus:ring-yellow-300"
				>
					Mon expérience
				</Link>
			</li>
			<li>
				<Link
					to="my-projects"
					onClick={() => setIsOpen(false)}
					className="block p-2 rounded-md transition-colors duration-200 hover:bg-white  hover:text-customLight focus:outline-none focus:ring-2 focus:ring-yellow-300"
				>
					Mes projets
				</Link>
			</li>
		</ul>
	);
}
