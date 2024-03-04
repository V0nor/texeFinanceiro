// import useClientData from '../../services/BlingAPI';

import useFetch from 'react-fetch-hook';
import { Link } from 'react-router-dom';

function UserProfile() {
  const { isLoading, data, error } = useFetch(
    'https://www.bling.com.br/b/Api/v3/contatos/16612149534'
  );
  if (isLoading) {
    return 'Carregando...';
  }

  if (error) {
    return 'Deu erro';
  }

  console.log(data.nome);
  return (
    <>
      <div>
        <h1>Componente UserProfile</h1>
        {data && <p>Nome do cliente: {data.id}</p>}
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default UserProfile;
