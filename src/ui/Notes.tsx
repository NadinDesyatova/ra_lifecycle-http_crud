import { useState } from "react";
import { AddNote } from "./AddNote";
import { ViewNotes } from "./ViewNotes";

export const Notes = () => {
  const [timeLoad, setTimeLoad] = useState(new Date);
  return (
    <div className="notes-widget">
      <ViewNotes setTimeLoad={setTimeLoad} timeLoad={timeLoad} />
      <AddNote setTimeLoad={setTimeLoad} />
    </div>
  );
};
