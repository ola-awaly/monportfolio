import experience from '../../assets/experience.webp';
import { LignesVerticales } from '../../components/LignesVerticales/LignesVerticales';
export function Experience() {
	return (
		<div className="flex flex-col-reverse items-center text-lg md:flex-row md:justify-center gap-6 justify-evenly">
			<div className="flex flex-col gap-2 ">
				<h2 className="text-5xl mb-4">Expérience</h2>
				<section className="flex flex-col ">
					<div className="font-semibold">2010 - 2021</div>
					<div className="font-semibold">LexGO SPRL</div>
					<div className="font-thin">Développeuse web</div>
				</section>
				<section className="flex flex-col ">
					<div className="font-semibold">2009</div>
					<div className="font-semibold">LexGO SPRL</div>
					<div className="font-thin">Développeuse web (Internship)</div>
				</section>
				<section className="flex flex-col ">
					<div className="font-semibold">2005</div>
					<div className="font-semibold">Redcorp SA (Anderlecht)</div>
					<div className="font-thin">Dévelopement ERP (Internship)</div>
				</section>
			</div>
			<div className="flex md:flex-col">
				<LignesVerticales sens="b" />
				<img
					src={experience}
					alt="experience ola awaly"
					className="rounded-full h-72"
				/>
				<LignesVerticales sens="t" />
			</div>
		</div>
	);
}
