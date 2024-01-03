import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const TasksList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (tasks.length === 0) {
    return (
      <div className="card mt-16 mx-auto w-72 text-center font-bold bg-neutral-200 p-4 text-secondary">
        <h2>No tasks to show</h2>
      </div>
    );
  }
  return (
    <ul className="mt-8 max-w-xl">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="card flex flex-row justify-between p-4 m-4 bg-neutral-200 text-neutral-950"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              } `}
            >
              {task.content}
            </h2>
            <div className="flex gap-4 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs"
              >
                edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TasksList;
