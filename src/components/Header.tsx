import style from "./Header.module.scss";

export function Header() {
	return (
		<div className={style.header}>
			<img src="/logoAG.png" alt="logo" />
			<div className={style.menu}>
				<h3>Início</h3>
				<h3>Sobre nós</h3>
				<h3>Alunos</h3>
				<h3>Planos</h3>
				<h3>Contato</h3>
			</div>
		</div>
	);
}
