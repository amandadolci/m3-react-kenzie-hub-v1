import { useEffect } from 'react';
import { StyledRegisterForm } from './style';
import { Select } from '../../components/Register Form/Select';
import { registerSchema } from './registerSchema';

export function RegisterForm({
  visiblePassword,
  setVisiblePassword,
  loading,
  setLoading,
  navigate,
  useForm,
  zodResolver,
  api,
  Input,
  successToast,
  errorToast,
  Eye,
}) {

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, dirtyFields },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      bio: '',
      contact: '',
    },
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    setLoading('Cadastrar');
  }, []);

  async function registerUser(registerBody) {
    setLoading('Carregando...');
    try {
      await api.post('/users', registerBody);
      reset(defaultValues);
      successToast();
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      errorToast(error.response.data.message);
    } finally {
      setLoading('Cadastrar');
    }
  }

  const emptyInputs = Object.values(dirtyFields).length < 7 ? true : false;

  return (
    <StyledRegisterForm>
      <div className='registerTitle'>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
      </div>
      <form noValidate onSubmit={handleSubmit(registerUser)}>
        <Input
          label='Nome'
          type='text'
          placeholder='Digite seu nome aqui'
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label='Email'
          type='text'
          placeholder='Digite seu e-mail aqui'
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label='Senha'
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Digite sua senha aqui'
          error={errors.password?.message}
          {...register('password')}
          eye={Eye}
          visiblePassword={visiblePassword}
          setVisiblePassword={setVisiblePassword}
        />
        <Input
          label='Confirmar senha'
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Confirme sua senha'
          error={errors.confirm?.message}
          {...register('confirm')}
          eye={Eye}
          visiblePassword={visiblePassword}
          setVisiblePassword={setVisiblePassword}
        />
        <Input
          label='Bio'
          type='text'
          placeholder='Fale sobre você'
          error={errors.bio?.message}
          {...register('bio')}
        />
        <Input
          label='Contato'
          type='text'
          placeholder='Opção de contato'
          error={errors.contact?.message}
          {...register('contact')}
        />
        <Select
          label='Selecionar módulo'
          error={errors.course_module?.message}
          {...register('course_module')}
        />
        <button className='primaryButton' disabled={emptyInputs ? true : false}>
          {loading}
        </button>
      </form>
    </StyledRegisterForm>
  );
}
