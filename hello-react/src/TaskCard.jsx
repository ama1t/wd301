import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.task === "done" ? (
        <p className="text-sm text-gray-500">
          Completed on: {props.completedAtDate}
        </p>
      ) : (
        <p className="text-sm text-gray-500">Due on: {props.dueDate}</p>
      )}
      <p className="text-sm text-gray-500">Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
