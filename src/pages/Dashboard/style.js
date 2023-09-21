import styled from 'styled-components';

export const StyledDashboardPage = styled.main`
	width: 100%;

	section,
	div {
		width: 50%;
		min-width: 18.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}

	section {
		padding: 2.3125rem 0.75rem;
		div {
			gap: 1.4375rem;
		}
	}

	header {
		width: 100%;
		height: 8.1875rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--grey-3);
		border-bottom: 1px solid var(--grey-3);
		div {
			gap: 0.625rem;
			padding: 0 0.75rem;
			small {
				font-size: 0.75rem;
				color: var(--grey-1);
			}
		}
	}

	@media (min-width: 768.1px) {
		section,
		div {
			width: 50%;
			min-width: 40rem;
		}

		section {
			padding: 2.3125rem 0;
		}

		header {
			div {
				padding: 0;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
`;
