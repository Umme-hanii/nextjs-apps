import { updateTask } from "@/utils/actions";

const EditForm = async ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form action={updateTask}>
      <div className="card p-4 shadow-2xl mt-4">
        <div className="card-body">
          <input name="id" type="hidden" value={id} />
          <input
            type="text"
            className="input-bordered p-2"
            name="content"
            defaultValue={content}
            required
          />
          <div className="form-control my-4">
            <label htmlFor="completed" className="label cursor-pointer">
              <span className="label-text">completed</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                id="completed"
                name="completed"
                defaultChecked={completed}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-accent btn-sm btn-block">
            update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
