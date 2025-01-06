export function Footer() {
	return (
		<footer className="text-xs  italic flex justify-center p-3 gap-4 opacity-55  bottom-0 w-full bg-black mt-6 sticky">
			<span className="font-bold">Contact : </span>
			<a href="mailto:awaly.ola@gmail.com">awaly.ola@gmail.com</a>

			<a
				href="tel:+0032479609790"
				aria-label="Appeler le numéro 0032 479 60 97 90"
			>
				<span>0479 60 97 90 </span>
			</a>
			<a
				href="https://www.linkedin.com/in/ola-awaly-20a046193/"
				target="_blank"
			>
				<i className="fa-brands fa-linkedin"></i>
			</a>
		</footer>
	);
}
