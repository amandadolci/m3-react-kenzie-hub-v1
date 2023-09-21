import { forwardRef } from 'react';
import { StyledInputContainer } from './style';

function InputComponent({ id, label, error, eye, visiblePassword, setVisiblePassword, ...rest }, ref) {
  return (
    <StyledInputContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {eye ? (
        <div className='passwordInput'>
          <input id={id} ref={ref} {...rest} />
          <img src={eye} alt='Visualizar senha' onClick={() => setVisiblePassword(!visiblePassword)} />
        </div>
      ) : (
        <input className='regularInput' id={id} ref={ref} {...rest} />
      )}
      {error ? <p>{error}</p> : null}
    </StyledInputContainer>
  );
}

export const Input = forwardRef(InputComponent);
