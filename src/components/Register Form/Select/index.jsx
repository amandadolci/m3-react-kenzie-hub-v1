import { forwardRef } from 'react';
import { StyledSelectContainer } from './style';

function SelectComponent({ id, label, error, ...rest }, ref) {
  return (
    <StyledSelectContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select name={id} id={id} ref={ref} {...rest}>
        <option value='' hidden>
          Selecione
        </option>
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo (Frontend Avançado)
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value='Quarto módulo (Backend Avançado)'>
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {error ? <p>{error}</p> : null}
    </StyledSelectContainer>
  );
}

export const Select = forwardRef(SelectComponent);
