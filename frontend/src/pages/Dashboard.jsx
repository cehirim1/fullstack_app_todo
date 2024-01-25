import React from "react";
import {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
} from "@/store/API/TodoAPI";
import TaskCard from "@/components/TaskCard";
import { OptionsMenu } from "@/components/OptionsMenu";

const Dashboard = () => {
  const [deleteOneTask] = useDeleteOneTaskMutation();

  const handleDelete = (taskID) => {
    console.log("kajdchjdscjhbds");
    deleteOneTask({ taskID });
  };

  const { data, error, isLoading, isFetching, isError } = useGetAllTasksQuery();

  if (isFetching || isLoading) return <div>Loading, please wait...</div>;

  if (isError || error) return <div>Something went wrong...</div>;

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-2">
        {data?.map((item) => (
          <OptionsMenu
            key={item._id}
            handleDelete={() => handleDelete(item._id)}
          >
            <TaskCard {...item} />
          </OptionsMenu>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
