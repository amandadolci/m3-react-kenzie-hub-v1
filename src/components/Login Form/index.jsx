import { useEffect } from 'react';
import { StyledLoginForm } from './style';
import { loginSchema } from './loginSchema';

export function LoginForm({
  visiblePassword,
  setVisiblePassword,
  loading,
  setLoading,
  Link,
  navigate,
  useForm,
  zodResolver,
  api,
  Input,
  loginErrorToast,
  Eye,
}) {

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, dirtyFields },
    reset,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    setLoading('Entrar');
  }, []);

  async function login(loginBody) {
    setLoading('Carregando...');
    try {
      const { data } = await api.post('/sessions', loginBody);
      localStorage.setItem('@KenzieHub:token', data.token);
      localStorage.setItem('@KenzieHub:userId', data.user.id);
      localStorage.setItem('@KenzieHub:user', JSON.stringify(data.user));
      reset(defaultValues);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      loginErrorToast(error.response.data.message);
    } finally {
      setLoading('Entrar');
    }
  }

  return (
    <StyledLoginForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(login)}>
        <Input
          label='Email'
          type='text'
          placeholder='Digite seu e-mail'
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label='Senha'
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Digite sua senha'
          eye={Eye}
          visiblePassword={visiblePassword}
          setVisiblePassword={setVisiblePassword}
          error={errors.password?.message}
          {...register('password')}
        />
        <button
          className='primaryButton'
          disabled={dirtyFields.email && dirtyFields.password ? false : true}>
          {loading}
        </button>
      </form>
      <div className='registerContainer'>
        <small>Ainda não possui conta?</small>
        <Link to='/register' className='secondaryButton'>
          Cadastre-se
        </Link>
      </div>
    </StyledLoginForm>
  );
}
