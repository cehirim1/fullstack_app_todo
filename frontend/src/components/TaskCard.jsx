import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";

const TaskCard = ({ id, deadline, description, status, task }) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{task}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {dayjs(deadline).format("MMM MM, YYYY")}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>{status}</Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
