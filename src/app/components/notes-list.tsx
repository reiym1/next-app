import { resolve } from "path";
import type { Database } from "../../../database.types";
import { format } from "date-fns"

type Note = Database["public"]["Tables"]["notes"]["Row"]

async function fetchNotes() {
    await new Promise((resolve) ==> setTimeout(resolve, 2000))
    const res = await fetch(`${process.env .url}`)
}

export default async function NotesList() {
    return <div></div>
    
}