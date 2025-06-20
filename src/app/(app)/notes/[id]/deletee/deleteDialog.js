"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteTodoAction } from "./action";
import { toast } from "sonner";
import { useState } from "react";

export const DeleteDialog = ({ deleteId, children }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      // Panggil action langsung dengan ID
      await deleteTodoAction(deleteId);

      toast.success("Pesanan berhasil dihapus!");
      // Refresh halaman setelah 1 detik
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Langsung reload tanpa timeout
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(
        error.message || "Gagal menghapus pesanan. Silakan coba lagi."
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak dapat dibatalkan. Data akan dihapus secara permanen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className={
              isDeleting
                ? "opacity-50 cursor-not-allowed"
                : " bg-red-600 hover:bg-red-800"
            }
          >
            {isDeleting ? "Menghapus..." : "Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
