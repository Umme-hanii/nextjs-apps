"use client";
import { createTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitTask = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary uppercase join-item"
      disabled={pending}
    >
      {pending ? "Please wait" : "create task"}
    </button>
  );
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
          required
        />
        <SubmitTask />
      </div>
    </form>
  );
};

export default TaskForm;
