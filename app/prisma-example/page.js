import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return (
      <div className="card mt-16 mx-auto w-72 text-center font-bold bg-neutral-200 p-4 text-secondary">
        <h2>No tasks to show</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😁 {task.content}
          </h2>
        );
      })}
    </div>
  );
};
export default PrismaPage;
