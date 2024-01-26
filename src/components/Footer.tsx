import style from "./Footer.module.scss";

export function Footer() {
	return (
		<div className={style.footer}>
			<img className={style.logo} src="/logoAG.png" alt="logo" />
			<div className={style.icons}>
				<a
					href="https://www.instagram.com/arthur.gaiozo/"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://wa.me/message/H6G3D5G7F4P2I1"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fab fa-whatsapp"></i>
				</a>
			</div>
		</div>
	);
}
