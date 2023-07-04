import React, { useState } from "react";
import ListUser from "./ListUser";
import UsersCreate from "./CreateUser";
import AppliedJob from "./AppliedJob";

const ContainerUser: React.FC = () => {
  const [userSelected, setUserSelected] = useState(null);
  const [loading, setLoading] = useState(false)
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-9">List of users</h1>
      <ListUser selectUser={setUserSelected} loading={loading} setLoading={setLoading} />
      <h1 className="text-2xl font-bold mt-9">Add users</h1>
      <UsersCreate user={userSelected} />
      <h1 className="text-2xl font-bold mt-9">Users who applied to a job</h1>
      <AppliedJob />
    </div>
  );
};

export default ContainerUser;