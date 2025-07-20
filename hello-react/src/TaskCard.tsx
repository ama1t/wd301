import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}: TaskCardProps) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      {completedAtDate != null ? (
        <p className="text-sm text-gray-500">Completed on: {completedAtDate}</p>
      ) : (
        <p className="text-sm text-gray-500">Due on: {dueDate}</p>
      )}
      <p className="text-sm text-gray-500">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
