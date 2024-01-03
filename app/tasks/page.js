import TaskForm from "@/components/TaskForm";
import TasksList from "@/components/TasksList";

const TasksPage = () => {
  return (
    <main className="max-w-lg">
      <TaskForm />
      <TasksList />
    </main>
  );
};
export default TasksPage;
