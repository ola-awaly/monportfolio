import education from '../../assets/education.webp';
import { LignesVerticales } from '../../components/LignesVerticales/LignesVerticales';
export function Education() {
	return (
		<div className="flex flex-col items-center text-lg md:flex-row md:justify-center md:gap-6 justify-evenly p-3">
			<div className="flex md:flex-col">
				<LignesVerticales sens="b" />
				<img
					src={education}
					alt="education ola awaly"
					className="rounded-full md:h-72 h-52"
				/>
				<LignesVerticales sens="t" />
			</div>
			<div className="flex flex-col gap-2 w-80">
				<h2 className="text-5xl mb-4">Education</h2>
				<section className="flex flex-col ">
					<div className="font-semibold">2022</div>
					<div className="font-semibold">Technofutur Tic (Gosselies)</div>
					<div className="font-thin">
						Formation en Développement web apps
					</div>
				</section>
				<section className="flex flex-col ">
					<div className="font-semibold">2009</div>
					<div className="font-semibold">Technofutur Tic (Gosselies)</div>
					<div className="font-thin">
						Formation en Développement BD orienté web.
					</div>
				</section>
				<section className="flex flex-col ">
					<div className="font-semibold">2005</div>
					<div className="font-semibold">
						Université de Travail (Charleroi)
					</div>
					<div className="font-thin">
						Bachelier en informatique de gestion
					</div>
					<div className="font-thin">Réussi avec grande distinction</div>
				</section>
			</div>
		</div>
	);
}
