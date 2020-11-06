import React from "react";

const useFetch = (url, options) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useCallback(async (url, options) => {
    let results;
    let resultsJson;

    try {
      setLoading("Carregando...");
      results = await fetch(url, options);
      resultsJson = await results.json();
      setData(resultsJson);
      setLoading(null);
      
    } catch (err) {
      setError(err.message);

    } finally {
      setData(resultsJson);
      return { results, resultsJson };
    }
  }, []);

  return { data, error, loading };
};

export default useFetch;
