export function LignesVerticales({ sens = 'b' }) {
	return (
		<div className={`flex justify-center items-end gap-4 m${sens}-[-6px]`}>
			<span className="border-l-[0.5px] border-white h-20 "></span>
			<span className="border-l border-white h-20 "></span>
			<span className="border-l border-white h-20"></span>
			<span className="border-l border-white h-20"></span>
			<span className="border-l border-white h-20 "></span>
		</div>
	);
}
