import { useEffect } from 'react';
import { RegisterForm } from '../../components/Register Form';

export function Register({
  authentication,
  Navbar,
  Toaster,
  Link,
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

  useEffect(() => {
    authentication();
  }, []);

  return (
    <>
      <Navbar button='Voltar' Link={Link} navigate={navigate} />
      <RegisterForm
        visiblePassword={visiblePassword}
        setVisiblePassword={setVisiblePassword}
        loading={loading}
        setLoading={setLoading}
        navigate={navigate}
        useForm={useForm}
        zodResolver={zodResolver}
        api={api}
        Input={Input}
        successToast={successToast}
        errorToast={errorToast}
        Eye={Eye}
      />
      <Toaster />
    </>
  );
}
