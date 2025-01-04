import maphoto from '../../assets/photocvwhitebg.png';
import { LignesVerticales } from '../../components/LignesVerticales/LignesVerticales';

export function AboutMe() {
	return (
		<section className="flex flex-col items-center text-lg md:flex-row md:justify-center md:gap-6 justify-evenly">
			<div className="mb-4 md:mb-0 ">
				<h1 className="text-5xl mb-6">Ola Awaly</h1>
				<p className="w-96 font-thin ">
					Développeuse web passionnée, je conçois des solutions modernes et
					performantes en mettant l’accent sur React.js et Node.js.
					Toujours curieuse et motivée, je suis prête à relever de nouveaux
					défis dans le développement full-stack.
				</p>
			</div>
			<div className="flex md:flex-col">
				<LignesVerticales sens="b" />

				<img
					src={maphoto}
					alt="photo ola awaly"
					className="h-64 rounded-full object-cover relative"
				/>
				<LignesVerticales sens="t" />
			</div>
		</section>
	);
}
