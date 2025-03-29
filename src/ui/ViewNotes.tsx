import { useEffect, useState, ReactNode } from "react";
import { OneViewNote } from "./OneViewNote";
import { ViewNotesPropsType, ListNoteItemType } from "../common/NotesComponentsTypes";

export const ViewNotes = ({setTimeLoad, timeLoad}: ViewNotesPropsType) => {
  const [listNotes, setListNote] = useState<Array<ListNoteItemType>>([]);
  
  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("http://localhost:7070/notes");
        const data = await response.json();
        setListNote(data);
      })();
    } catch (error) {
      console.error("Error:", error);
    }
  }, [timeLoad]);

  const rebootData = () => setTimeLoad(new Date);

  const view: Array<ReactNode> = listNotes.map(elem => {
    return <OneViewNote text={elem.content} key={elem.id} index={elem.id} setTimeLoad={setTimeLoad} />
  });

  return (
    <div className="notes-content">
      <div className="notes-header">
        <h2 className="notes-title">Notes</h2>
        <button className="reboot-button material-icons" onClick={rebootData}>sync</button>
      </div>
      <ul className="notes-list-container">
        {view}
      </ul>
    </div>
  );
};
