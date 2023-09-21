import { StyledDashboardPage } from './style';

export function Dashboard({ Navbar, Navigate, Link, navigate }) {
  function authentication() {
    const token = localStorage.getItem('@KenzieHub:token');
    if (!token) {
      Navigate({ to: '/' });
    }
  }
  authentication();

  const { name, course_module } = JSON.parse(localStorage.getItem('@KenzieHub:user')) || '';

  return (
    <>
      <Navbar button='Sair' dashboard={true} Link={Link} navigate={navigate} />
      <StyledDashboardPage>
        <header>
          <div>
            <h1>Olá, {name}</h1>
            <small>{course_module}</small>
          </div>
        </header>
        <section>
          <div>
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
          </div>
        </section>
      </StyledDashboardPage>
    </>
  );
}
