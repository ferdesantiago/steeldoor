import React from "react";
import Table from "../global/Table";

const ListUser: React.FC <{ selectUser: Function, setLoading: Function, loading: Boolean }>= ({ selectUser, loading, setLoading }) => {
  const headers = ['id', 'name', 'email', 'role', 'resume'];
  const url = '/user';
  return (
    <Table url={url} headers={headers} selectItem={selectUser} loading={loading} setLoading={setLoading} />
  );
};

export default ListUser;