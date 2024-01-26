import { Alunos } from "./components/Alunos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Planos } from "./components/Planos";
import { Sobre } from "./components/Sobre";

export function App() {
	return (
		<div>
			<Header />
			<Inicio />
			<Sobre />
			<Alunos />
			<Planos />
			<Contato />
			<Footer />
		</div>
	);
}
