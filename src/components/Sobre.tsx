import style from "./Sobre.module.scss";

export function Sobre() {
	return (
		<div className={style.sobre}>
			<h1>Compromisso com o seu resultado!</h1>
			<div className={style.etapas}>
				<div>
					<img src="/avaliacao.png" alt="dieta" />
					<h2>Avaliação</h2>
					<p>
						Descrição de como é feita a avaliação...Descrição de como é feita a
						avaliação... Descrição de como é feita a avaliação... Descrição de
						como é feita a avaliação... Descrição de como é feita a avaliação...
					</p>
				</div>
				<div>
					<img src="/dieta.png" alt="dieta" />
					<h2>Dieta</h2>
					<p>
						Descrição de como é feita a dieta...Descrição de como é feita a
						dieta... Descrição de como é feita a dieta... Descrição de como é
						feita a dieta... Descrição de como é feita a dieta...
					</p>
				</div>
				<div>
					<img src="/treino.png" alt="dieta" />
					<h2>Treino</h2>
					<p>
						Descrição de como é feito o treino...Descrição de como é feito o
						treino... Descrição de como é feito o treino... Descrição de como é
						feito o treino... Descrição de como é feito o treino... Descrição de
						como é feito o treino...
					</p>
				</div>
				<div>
					<img src="/acompanhamento.png" alt="dieta" />
					<h2>Acompanhamento</h2>
					<p>
						Descrição de como é feita o acompanhamento...Descrição de como é
						feita o acompanhamento... Descrição de como é feita o
						acompanhamento... Descrição de como é feita o acompanhamento...
						Descrição de como é feita o acompanhamento...
					</p>
				</div>
			</div>
		</div>
	);
}
