import React from "react";
import {
  useGetAllTasksQuery,
  useDeleteOneTaskMutation,
} from "@/store/API/TodoAPI";
import TaskCard from "@/components/TaskCard";
import { OptionsMenu } from "@/components/OptionsMenu";
import TodoModal from "@/components/Modal/TodoModal";
import { useCreateOneTaskMutation } from "@/store/API/TodoAPI";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [taskData, setTaskData] = React.useState({
    task: "",
    description: "",
    status: "incomplete",
    deadline: Date.now(),
  });
  const [deleteOneTask] = useDeleteOneTaskMutation();
  const [createOneTask] = useCreateOneTaskMutation();

  const handleDelete = async (taskID) => {
    await toast.promise(deleteOneTask({ taskID }).unwrap(), {
      pending: "Deleting Task...",
      success: "Task Deleted!",
      error: "Uh oh! Something went wrong.",
    });
  };

  const handleTaskCreate = async (e) => {
    e.preventDefault();
    await toast
      .promise(createOneTask(taskData).unwrap(), {
        pending: "Creating Task...",
        success: "Task Created!",
        error: "Uh oh! Something went wrong.",
      })
      .then(() =>
        setTaskData({
          task: "",
          description: "",
          status: "incomplete",
          deadline: Date.now(),
        }),
      )
      .catch((err) => console.log(err));
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
  };

  const { data, error, isLoading, isFetching, isError } = useGetAllTasksQuery();

  if (isFetching || isLoading) return <div>Loading, please wait...</div>;

  if (isError || error) return <div>Something went wrong...</div>;

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto">
      <TodoModal
        label="create New Task"
        data={taskData}
        setData={setTaskData}
        action={handleTaskCreate}
        submitBtn="Create Task"
      />
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
