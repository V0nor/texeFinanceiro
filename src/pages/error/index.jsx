import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>
        <h1>Oops!</h1>
        <p>Desculpe, ocorreu um erro inesperado.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}

export default Error;
