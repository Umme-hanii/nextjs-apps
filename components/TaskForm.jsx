import { revalidatePath } from "next/cache";

const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  console.log("content", content);
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
};

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="Type Here..."
          className="input-bordered p-2 join-item w-full"
          name="content"
        />
        <button type="submit" className="btn btn-primary uppercase join-item">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
