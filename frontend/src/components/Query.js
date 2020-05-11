import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ENDPOINT_QUERY } from '../services/Query';
import { Table } from './Table';


export function EndPointQuery() {
  const { loading, error, data } = useQuery(ENDPOINT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return(
    <Table
      data={data}
    />
  );
}