import React, { useState } from "react";
import ListJob from "./ListJob";
import CreateJob from "./CreateJob";
import ApplyJob from "../jobs/ApplyJob";

const ContainerJob: React.FC = () => {
  const [jobSelected, setJobSelected] = useState(null);
  const [loading, setLoading] = useState(false)
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-9">List of jobs</h1>
      <ListJob selectJob={setJobSelected} loading={loading} setLoading={setLoading} />
      <h1 className="text-2xl font-bold mt-9">Add job</h1>
      <CreateJob job={jobSelected} setLoading={setLoading} />
      <h1 className="text-2xl font-bold mt-9">Apply to a job</h1>
      <ApplyJob />
    </div>
  );
};

export default ContainerJob;