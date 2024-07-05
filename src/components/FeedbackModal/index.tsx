import React from "react";
import styles from "./styles.module.css";
import { generateRandomClientId } from "./random-utils";
import clsx from "clsx";

const LOCAL_STORAGE_KEY = "client-id";

export default function FeedbackModal() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [content, setContent] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");
	const [successMessage, setSuccessMessage] = React.useState("");

	React.useEffect(() => {
		const clientId = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (!clientId) {
			const randomId = generateRandomClientId();
			localStorage.setItem(LOCAL_STORAGE_KEY, randomId);
		}
	}, []);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (content.trim() === "") {
			return;
		}

		const clientId = localStorage.getItem(LOCAL_STORAGE_KEY) ?? "";

		try {
			await fetch("http://localhost:8000/feedback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					clientId,
					content,
					pathName: window.location.pathname,
				}),
			});
			setErrorMessage("");
			setContent("");
			setSuccessMessage("Thanks for your feedback!");
		} catch (err) {
			setErrorMessage("An error occurred. Please try again.");
			setSuccessMessage("");
			return;
		}
	}

	function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setSuccessMessage("");
		setContent(e.target.value);
	}

	function handleButtonClick() {
		const newIsOpen = !isOpen;
		if (!newIsOpen) {
			setContent("");
			setErrorMessage("");
			setSuccessMessage("");
		}
		setIsOpen(newIsOpen);
	}

	const hasValidContent = content.length >= 5;

	return (
		<>
			<button
				className={styles.feedbackModalButton}
				onClick={() => handleButtonClick()}
			>
			</button>
			{isOpen && (
				<div className={styles.feedbackModal}>
					<form onSubmit={handleSubmit}>
						<div>
							Send us anonymous feedback about the website or
							plugin
						</div>
						<textarea
							value={content}
							rows={5}
							placeholder="Write your message..."
							onChange={handleTextAreaChange}
						/>
						<div className={styles.feedbackModal__buttonContainer}>
							{successMessage.length === 0 &&
								errorMessage.length === 0 && <div></div>}
							{successMessage.length > 0 && (
								<div
									className={clsx(
										styles.feedbackModal__message,
										styles.feedbackModal__message_success
									)}
								>
									{successMessage}
								</div>
							)}
							{errorMessage.length > 0 && (
								<div
									className={clsx(
										styles.feedbackModal__message,
										styles.feedbackModal__message_error
									)}
								>
									{errorMessage}
								</div>
							)}
							<button
								className={clsx(
									styles.feedbackModal__submit,
									!hasValidContent
										? styles.feedbackModal__submit_disabled
										: ""
								)}
								disabled={!hasValidContent}
								type="submit"
							/>
						</div>
					</form>
				</div>
			)}
		</>
	);
}