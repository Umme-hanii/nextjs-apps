"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  console.log(id, content, completed);

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed ? true : false,
    },
  });

  redirect("/tasks");
};
