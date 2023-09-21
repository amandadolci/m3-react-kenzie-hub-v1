import styled from 'styled-components';

export const StyledLoginForm = styled.section`
	background-color: var(--grey-3);
	border-radius: var(--radius-4);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.125rem;
	padding: 2.125rem 1.125rem;
	height: fit-content;
	width: 18.5rem;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label,
	p {
		font-size: 0.625rem;
	}

	.registerContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.125rem;
		padding-top: 0.625rem;

		small {
			font-size: 0.625rem;
			color: var(--grey-1);
		}
	}

	@media (min-width: 768.1px) {
		gap: 1.375rem;
		padding: 2.625rem 1.375rem;
		width: 23.125rem;

		form {
			gap: 1.375rem;
		}

		label,
		p {
			font-size: 0.75rem;
		}

		.registerContainer {
			gap: 1.375rem;
			padding-top: 0.75rem;

			small {
				font-size: 0.75rem;
			}
		}
	}
`;
