"use server";
import { revalidatePath } from "next/cache";

export async function deleteTodoAction(deleteId) {
  try {
    const response = await fetch(
      "https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([deleteId]),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    revalidatePath("/notes");
    return true;
  } catch (error) {
    console.error("Error in deleteTodoAction:", error);
    throw new Error("Gagal menghapus: " + error.message);
  }
}
