import React from 'react';

interface IRequest {
  response: Response | undefined;
  json: any;
}

interface IUseFetch {
  data: {};
  error: null | string;
  loading: boolean;
  request(url: string, options: {}): Promise<IRequest>;
}

const useFetch = (): IUseFetch => {
  const [ data, setData ] = React.useState<{}>({});
  const [ error, setError ] = React.useState<null | string>(null);
  const [ loading, setLoading ] = React.useState(false);

  const request = React.useCallback(
    async (url: string, options: {}): Promise<IRequest> => {
      let response;
      let json;

      try {
        setLoading(true);
        setError(null);
        
        response = await fetch(url, options);
        json = await response.json();

        if (!response.ok) throw new Error(json.message);
      } catch(error) {
        json = null;
        setError(error.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
  }, []);

  return { request, data, error, loading };
}

export default useFetch;