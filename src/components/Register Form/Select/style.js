import styled from 'styled-components';

export const StyledSelectContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.75rem;

	label,
	p {
		font-size: 0.625rem;
	}

	select {
		width: 100%;
		height: 2.375rem;
		background-color: var(--grey-2);
		border: 1px solid var(--grey-2);
		color: var(--grey-1);
		border-radius: var(--radius-4);
		padding: 0.625rem 0.875rem;

		:focus {
			border: 1px solid var(--grey-0);
			color: var(--grey-0);
		}
	}

	@media (min-width: 768.1px) {
		gap: 1.25rem;

		label,
		p {
			font-size: 0.75rem;
		}

		select {
			height: 3rem;
			font-size: 1rem;
			padding: 0.6563rem 1rem;
		}
	}
`;
