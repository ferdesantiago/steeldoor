import React, { useState } from "react";
import Table from "../global/Table";

const ListJob: React.FC<{ selectJob: Function, setLoading: Function, loading: Boolean }> = ({ selectJob, loading, setLoading }) => {
  const headers = ['id', 'company', 'location', 'title', 'description', 'salary', 'skills'];
  const url = '/job';

  return (
    <Table url={url} headers={headers} selectItem={selectJob} loading={loading} setLoading={setLoading} />
  );
};

export default ListJob;