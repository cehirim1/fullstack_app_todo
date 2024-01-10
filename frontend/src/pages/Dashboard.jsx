import React from "react";
import { useGetAllTasksQuery } from "@/store/API/TodoAPI";

const Dashboard = () => {
  const { data, error, isLoading, isFetching, isError } = useGetAllTasksQuery({
    userID: "658bb7fdfbe5c463f2cfd137",
  });

  if (isFetching || isLoading) return <div>Loading, please wait...</div>;

  if (isError || error) return <div>Something went wrong...</div>;

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
