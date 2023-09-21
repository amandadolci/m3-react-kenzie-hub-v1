import { useEffect } from 'react';
import { LoginForm } from '../../components/Login Form';

export function Login({
  authentication,
  Navbar,
  Toaster,
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

  useEffect(() => {
    authentication();
  }, []);

  return (
    <>
      <Navbar Link={Link} navigate={navigate} />
      <main>
        <LoginForm
          visiblePassword={visiblePassword}
          setVisiblePassword={setVisiblePassword}
          loading={loading}
          setLoading={setLoading}
          Link={Link}
          navigate={navigate}
          useForm={useForm}
          zodResolver={zodResolver}
          api={api}
          Navbar={Navbar}
          Input={Input}
          loginErrorToast={loginErrorToast}
          Eye={Eye}
        />
      </main>
      <Toaster />
    </>
  );
}
