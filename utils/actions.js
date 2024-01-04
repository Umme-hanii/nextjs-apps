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
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};

export const deleteTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const id = formData.get("id");
    const deletedTask = await prisma.task.delete({
      where: {
        id: id,
      },
    });
    if (deletedTask) {
      revalidatePath("/tasks");
      return { message: "success" };
    } else {
      throw new Error("Failed to delete the task");
    }
  } catch (error) {
    return { message: "error" };
  }
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
