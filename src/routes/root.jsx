import { Link } from 'react-router-dom';

function Root() {
  return (
    <>
      <div>
        <h1>Componente Home</h1>
        <Link to={`/user`}>User</Link>
        <br />
        <Link to={`/users`}>Users</Link>
      </div>
    </>
  );
}

export default Root;
