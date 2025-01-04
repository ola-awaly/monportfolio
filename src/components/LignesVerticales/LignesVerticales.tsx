export function LignesVerticales({ sens = 'b' }) {
	return (
		<div
			className={`flex flex-auto md:flex-row flex-col justify-center md:items-end items-center gap-4 m${sens}-[-6px]`}
		>
			<span className="md:border-l border-white md:h-20 border-t w-10  md:w-0"></span>
			<span className="md:border-l border-white md:h-20 border-t w-10 md:w-0"></span>
			<span className="md:border-l border-white md:h-20 border-t w-10 md:w-0"></span>
			<span className="md:border-l border-white md:h-20 border-t w-10 md:w-0"></span>
			<span className="md:border-l border-white md:h-20 border-t w-10 md:w-0"></span>
		</div>
	);
}
