import Logo from '../../assets/Logo.svg';
import { StyledNav } from './style';

export function Navbar({ button, dashboard, Link, navigate }) {

  function handleLogout() {
    const keysToRemove = ['@KenzieHub:token', '@KenzieHub:user', '@KenzieHub:userId'];
    keysToRemove.forEach(key => localStorage.removeItem(key));
    setTimeout(() => {
      navigate('/');
    }, 500);
  }

  return (
    <StyledNav button={button} dashboard={dashboard}>
      <img src={Logo} alt='Kenzie Hub Logo' />
      {button === 'Sair' ? (
        <button onClick={handleLogout} className='navButton'>
          {button}
        </button>
      ) : button === 'Voltar' ? (
        <Link to='/' className='navButton'>
          {button}
        </Link>
      ) : null}
    </StyledNav>
  );
}
