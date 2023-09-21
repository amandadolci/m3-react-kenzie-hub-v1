import styled from 'styled-components';

export const StyledInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.75rem;

	.regularInput,
	.passwordInput {
		width: 100%;
		height: 2.375rem;
		background-color: var(--grey-2);
		border: 1px solid var(--grey-2);
		border-radius: var(--radius-4);
		color: var(--grey-0);
		font-size: 0.8125rem;
		padding: 0.625rem 0.875rem;
		display: flex;
		align-items: center;

		::placeholder,
		input::placeholder {
			color: var(--grey-1);
		}

		:focus-within {
			border: 1px solid var(--grey-0);
			::placeholder,
			input::placeholder {
				color: var(--grey-0);
			}
		}

		input {
			background-color: inherit;
			color: var(--grey-0);
			height: 100%;
			width: calc(100% - 0.75rem);
		}

		img {
			cursor: pointer;
			width: 0.75rem;
			:hover {
				opacity: 65%;
			}
		}
	}

	@media (min-width: 768.1px) {
		gap: 1.25rem;

		.regularInput,
		.passwordInput {
			height: 3rem;
			font-size: 1rem;
			padding: 0.6563rem 1rem;
			input {
				width: calc(100% - 0.875rem);
			}
			img {
				width: 0.875rem;
			}
		}
	}
`;
