import style from "./Planos.module.scss";

export function Planos() {
	return (
		<div id="planos" className={style.planos}>
			<h1>PLANOS</h1>
			<div className={style.cards}>
				<div className={style.card}>
					<h1>R$ 150,00</h1>
					<h2>Plano Padrão</h2>
					<p>
						Descrição do planos...Descrição do planos...Descrição do planos...
						Descrição do planos...
					</p>
				</div>
				<div className={style.card}>
					<h1>R$ 250,00</h1>
					<h2>Plano Intermediário</h2>
					<p>
						Descrição do planos...Descrição do planos...Descrição do planos...
						Descrição do planos...
					</p>
				</div>
				<div className={style.card}>
					<h1>R$ 400,00</h1>
					<h2>Plano Completo</h2>
					<p>
						Descrição do planos...Descrição do planos...Descrição do planos...
						Descrição do planos...
					</p>
				</div>
			</div>
		</div>
	);
}
