"use client";
import { createTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

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

  return (
    <form action={formAction}>
      {state.message ? (
        <p className="font-bold mb-8 capitalize">{state.message}</p>
      ) : null}
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
