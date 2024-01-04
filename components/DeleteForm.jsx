"use client";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

import { deleteTask } from "@/utils/actions";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? "Pending..." : "delete"}
    </button>
  );
};

const initialState = {
  message: null,
};

const DeleteForm = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if (state.message == "error") {
      toast.error("There was an error deleting the task");
      return;
    }
    if (state.message) {
      toast.success("Task deleted !!!");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;
