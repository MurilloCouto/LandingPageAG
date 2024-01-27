import React, { useState } from "react";
import style from "./Contato.module.scss";
import emailjs from "emailjs-com";
import { Button } from "./Button";

export function Contato() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Use o seu Service ID, Template ID e User ID do EmailJS
		const serviceId = "gmailMessage";
		const templateId = "template_dulo1un";
		const userId = "Isz2DDX97hFuHKRSR";

		// Configuração do e-mail a ser enviado
		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		emailjs
			.send(serviceId, templateId, templateParams, userId)
			.then((response) => {
				console.log("E-mail enviado com sucesso!", response);
				clearForm();
				window.scrollTo(0, 0);
				window.alert("Mensagem enviada com sucesso!");
			})
			.catch((error) => {
				console.error("Erro ao enviar e-mail:", error);
			});
	};

	const clearForm = () => {
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div id="contato" className={style.contato}>
			<h1>Entre em contato com a gente!</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Nome:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						placeholder="Digite seu nome aqui..."
					/>
				</label>
				<label>
					E-mail:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder="Digite seu e-mail aqui..."
					/>
				</label>
				<label>
					Mensagem:
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						placeholder="Digite sua mensagem aqui..."
					/>
				</label>
				<Button text="ENVIAR" type="submit" />
			</form>
		</div>
	);
}
