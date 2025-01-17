import mastermind from '../../assets/mastermind_screen.png';
import cvgenerator from '../../assets/cvgenerator_screen.png';
export function Project() {
	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-[60%_30%] items-end text-base  gap-6 justify-items-center">
				<div className="space-y-8  ">
					<h1 className="text-3xl mb-6">Mastermind</h1>
					<p className="w-80 md:w-[500px] font-thin ">
						Mastermind a été développé avec une architecture full-stack
						moderne. Le backend utilise Node.js et Express pour fournir
						une API robuste, tandis que le frontend, conçu avec React.js
						et stylisé avec Tailwind CSS, offre une interface utilisateur
						intuitive. Les données des joueurs et des parties sont gérées
						avec une base de données MongoDB. Un pipeline CI/CD basé sur
						GitHub Actions assure des déploiements automatisés et fiables,
						garantissant une livraison continue et une intégration fluide.
					</p>
				</div>
				<div className="">
					<a href="http://mastermind.olatech.ovh" target="_blank">
						<img
							src={mastermind}
							alt="mastermind"
							className="h-48 rounded-sm "
						/>
					</a>
				</div>
				<div className="order-3 lg:order-none">
					<a href="http://cvgenerator.olatech.ovh" target="_blank">
						<img
							src={cvgenerator}
							alt="cvgenerator"
							className="md:h-64 rounded-sm h-36"
						/>
					</a>
				</div>
				<div className="space-y-8 order-1 lg:order-none">
					<h1 className="text-3xl mb-6">CV Generator</h1>
					<p className="w-80 md:w-[460px]  font-thin ">
						CVGenerator est une application web interactive permettant de
						créer des CV personnalisés. Il intègre un formulaire
						multi-étapes pour collecter les informations nécessaires et
						affiche un aperçu dynamique du CV finalisé. Chaque section du
						CV peut être éditée individuellement, et un système de
						drag-and-drop permet de réorganiser facilement les éléments.
						Le backend repose sur Node.js, Express, et une base de données
						MySQL pour une gestion efficace des données. Le frontend,
						développé avec Angular, offre une interface réactive et
						conviviale, mettant en avant l'expérience utilisateur.
					</p>
				</div>
			</section>
		</>
	);
}
