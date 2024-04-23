import { Button } from "./Button";
import style from "./Inicio.module.scss";

export function Inicio() {
	return (
		<div id="inicio" className={style.inicio}>
			<h1>Seja bem-vindo(a), ao seu novo estilo de vida!</h1>
			<p>
				Oferecemos treinos personalizados, orientações nutricionais e o suporte
				necessário para você alcançar seus objetivos. <br /> Juntos, criaremos um plano adaptado
				às suas metas específicas. <br /> Estamos aqui para esclarecer dúvidas,
				ajustar estratégias e celebrar suas conquistas. <br /> Seu sucesso é a
				nossa prioridade!
			</p>
			<Button text={"Confira nossos planos"} type={undefined} />
		</div>
	);
}
