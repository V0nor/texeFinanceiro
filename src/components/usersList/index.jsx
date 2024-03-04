import { Link } from 'react-router-dom';

function UsersList() {
  return (
    <>
      <div>
        <h1>Componente dos usuários</h1>
        <Link to={`/`}>Voltar para a Página inicial</Link>
      </div>
    </>
  );
}

export default UsersList;
