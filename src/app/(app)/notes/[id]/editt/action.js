"use server";

import { revalidatePath } from "next/cache";

export async function updateTodoAction(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");
  const money = formData.get("money");
  const user = formData.get("user");

  try {
    const response = await fetch(
      "https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          title,
          content,
          money: Number(money),
          user,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    revalidatePath("/notes");
    return {
      status: "success",
      message: "Pesanan berhasil diperbarui!",
    };
  } catch (error) {
    console.error("Update error:", error);
    return {
      status: "error",
      message: error.message || "Gagal memperbarui pesanan. Silakan coba lagi.",
    };
  }
}
