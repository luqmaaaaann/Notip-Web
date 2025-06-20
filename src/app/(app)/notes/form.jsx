"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect } from "react";
import { createNoteAction } from "./action";
import { toast } from "sonner";

export const Form = () => {
  const [state, action, pending] = useActionState(createNoteAction, null);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message || "Terjadi kesalahan");
    }
  }, [state]);

  return (
    <form className="space-y-2" action={action}>
      <div className="space-y-1">
        <Input
          className="text-white placeholder:text-neutral-400"
          name="user"
          placeholder="Siapa yg nitip?"
          required
        />
      </div>

      <div className="space-y-1">
        <Input
          className="text-white placeholder:text-neutral-400"
          name="title"
          placeholder="Mau beli apa"
          required
        />
      </div>

      <div className="space-y-1">
        <Textarea
          className="text-white placeholder:text-neutral-400"
          name="content"
          placeholder="Apakah ada request untuk yg dibeli?"
        />
      </div>

      <div className="space-y-1">
        <Input
          className="text-white  placeholder:text-neutral-400"
          name="money"
          placeholder="Duit yg dikasih"
          type="number"
          required
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center"></div>
        <Button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          type="submit"
          disabled={pending}
        >
          {pending ? "Loading.." : "Catat"}
        </Button>
      </div>
    </form>
  );
};
