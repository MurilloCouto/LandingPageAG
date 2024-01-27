import style from "./Alunos.module.scss";

export function Alunos() {
	return (
		<div id="alunos" className={style.alunos}>
			<h1>Aqui estão alguns dos resultados dos nossos alunos</h1>
			<div className={style.fotos}>
				<img src="/slide-1.jpg" alt="alunos" />
				<img src="/slide-3.jpg" alt="alunos" />
				<img src="/slide-1.jpg" alt="alunos" />
				<img src="/slide-3.jpg" alt="alunos" />
			</div>
		</div>
	);
}
