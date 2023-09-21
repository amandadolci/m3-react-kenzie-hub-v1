import styled from 'styled-components';

export const StyledNav = styled.nav`
	width: ${props => (props.dashboard ? '50%' : '18.5rem')};
	min-width: 18.5rem;
	display: flex;
	justify-content: ${props => (props.button ? 'space-between' : 'center')};
	align-items: center;
	padding: ${props =>
		props.dashboard ? '0 0.75rem' : props.button ? '0 0 2rem 0' : '0 0 1.25rem 0'};
	position: ${props => (props.dashboard ? 'absolute' : null)};
	top: 0;
	height: ${props => (props.dashboard ? '4.5rem' : null)};

	img {
		width: 6.25rem;
	}

	.navButton {
		padding: ${props => (props.dashboard ? '0 1rem' : null)};
	}

	@media (min-width: 768.1px) {
		width: ${props => (props.dashboard ? '50%' : '23.125rem')};
		min-width: ${props => (props.dashboard ? '40rem' : '23.125rem')};
		padding: ${props =>
			props.dashboard ? '0' : props.button ? '0 0 2.5rem 0' : '0 0 2.25rem 0'};

		img {
			width: 9rem;
		}
	}
`;
