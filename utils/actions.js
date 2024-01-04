"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import prisma from "./db";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    const content = formData.get("content");
    Task.parse({
      content,
    });

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/tasks");
    return { message: "Success!!!" };
  } catch (error) {
    return { message: "error...." };
  }
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
