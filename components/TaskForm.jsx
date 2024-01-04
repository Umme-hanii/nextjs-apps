"use client";
import { createTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

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

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message == "error") {
      toast.error("There was an error creating the task");
      return;
    }
    if (state.message) {
      toast.success("Task created !!!");
    }
  }, [state]);

  return (
    <form action={formAction}>
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
