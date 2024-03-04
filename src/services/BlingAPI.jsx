import { useFetch } from 'react-fetch-hook';

const useClientData = (clientId) => {
  const { isLoading, error, data } = useFetch(
    `https://www.bling.com.br/b/Api/v3/contatos/${clientId}`
  );

  return { isLoading, error, data };
};

export default useClientData;
