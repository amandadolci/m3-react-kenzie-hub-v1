export function PageNotFound({ Navbar, Link, navigate }) {
  return (
    <>
      <Navbar button='Voltar' Link={Link} navigate={navigate} />
      <main className='pageNotFound'>
        <h1 >Página não encontrada!</h1>
      </main>
    </>
  )
}