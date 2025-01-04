import { useState } from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { MenuMobile } from './MenuMobile';
export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className=" flex flex-row justify-evenly items-center">
			<Logo />
			<Menu />
			<MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
			<ul className="lg:hidden">
				<li>
					<i
						className="fa-solid fa-bars text-5xl"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					></i>
				</li>
			</ul>
		</header>
	);
}
