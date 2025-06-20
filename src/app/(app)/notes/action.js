"use server";

import { getUsername } from "@/utils/getUsername";
import { revalidatePath } from "next/cache";

export async function createNoteAction(_, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const money = formData.get("money");
  const user = formData.get("user");
  const username = await getUsername();

  await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      { title, content, money: Number(money), user, username },
    ]),
  });

  revalidatePath("/notes");

  return {
    status: "success",
    message: "Titipan Berhasil Di Input!",
  };
}
