import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <section className="max-w-lg">
      <Link href="/tasks" className="btn btn-primary">
        back to tasks
      </Link>
      <EditForm task={task} />
    </section>
  );
};

export default SingleTaskPage;
