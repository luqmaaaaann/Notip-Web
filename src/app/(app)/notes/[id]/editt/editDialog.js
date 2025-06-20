"use client";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { updateTodoAction } from "./action";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function EditDialog({ children, noteId }) {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch(
          `https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB/${noteId}`
        );
        const data = await res.json();
        setNote(data);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("Gagal memuat data pesanan");
      } finally {
        setLoading(false);
      }
    }

    if (noteId && open) {
      fetchNote();
    }
  }, [noteId, open]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading("Menyimpan perubahan...");

    try {
      const formData = new FormData(event.target);
      const result = await updateTodoAction(formData);

      if (result.status === "success") {
        toast.success(result.message, { id: toastId });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(result.message || "Gagal memperbarui pesanan", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading && open) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <div className="p-4 text-center">Memuat data pesanan...</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {children}
      </DialogTrigger>
      {note && (
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={note._id} />
            <DialogHeader>
              <DialogTitle>Edit Pesanan</DialogTitle>
              <DialogDescription>
                Ubah detail pesanan titipanmu
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-3">
                <Label htmlFor="user">Nama Penitip</Label>
                <Input
                  id="user"
                  name="user"
                  defaultValue={note.user}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="title">Pesanan</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={note.title}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Keterangan</Label>
                <Textarea
                  id="content"
                  name="content"
                  defaultValue={note.content}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="money">Harga (Rp)</Label>
                <Input
                  id="money"
                  name="money"
                  type="number"
                  defaultValue={note.money}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={isSubmitting}>
                  Batal
                </Button>
              </DialogClose>
              <Button
                className="bg-green-600 hover:bg-green-800"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
