import style from "./Header.module.scss";

export function Header() {
	return (
		<div className={style.header}>
			<img src="/logoAG.png" alt="logo" />
			<div className={style.menu}>
				<a href="#inicio">
					<h3>Início</h3>
				</a>
				<a href="#sobre">
					<h3>Sobre nós</h3>
				</a>
				<a href="#alunos">
					<h3>Alunos</h3>
				</a>
				<a href="#planos">
					<h3>Planos</h3>
				</a>
				<a href="#contato">
					<h3>Contato</h3>
				</a>
			</div>
		</div>
	);
}
