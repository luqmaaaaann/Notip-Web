import { Card, CardContent } from "@/components/ui/card";
import { cookies } from "next/headers";
import moment from "moment";
import { Form } from "./form";
import { getUsername } from "@/utils/getUsername";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import EditDialog from "./[id]/editt/editDialog";
import { DeleteDialog } from "./[id]/deletee/deleteDialog";

export default async function Page() {
  const username = await getUsername();
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB/?filterKey=username&filterValue=${username}`
  );
  const { data: notes } = await res.json();

  return (
    <div className="space-y-4 py-8">
      <h3 className="font-medium text-lg text-white">List yang mau nitip</h3>
      <Form username={username} />

      <Card>
        <div className="px-7 pt-6">
          <p className="text-lg text-black font-medium">
            Hai {username}, ini list titipanmu
          </p>
        </div>
        <CardContent className="space-y-2">
          <Table>
            <TableCaption>Total {notes.length} pesanan terdaftar</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Penitip</TableHead>
                <TableHead>Pesanan</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notes.map((note) => (
                <TableRow key={note._id}>
                  <TableCell className="font-medium">{note.user}</TableCell>
                  <TableCell>{note.title}</TableCell>
                  <TableCell>{note.content}</TableCell>
                  <TableCell className="font-medium">
                    Rp.{note.money?.toLocaleString("id-ID") || "0"}
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {moment(note.createdAt).format("MMM DD, YYYY")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <EditDialog noteId={note._id}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="p-1.5 min-w-0 w-8 h-8 bg-[url('https://img.icons8.com/ios-glyphs/30/edit--v1.png')] bg-[length:16px_16px] bg-no-repeat bg-center"
                        ></Button>
                      </EditDialog>
                      <DeleteDialog deleteId={note._id}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-1.5 min-w-0 w-8 h-8 bg-[url('https://img.icons8.com/ios-glyphs/30/filled-trash.png')] bg-[length:16px_16px] bg-no-repeat bg-center"
                        ></Button>
                      </DeleteDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
