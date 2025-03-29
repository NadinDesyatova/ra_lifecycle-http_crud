import { OneViewNotePropsType } from "../common/NotesComponentsTypes";


export const OneViewNote = ({text, index, setTimeLoad}: OneViewNotePropsType) => {
  const onClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    fetch(`http://localhost:7070/notes/${(target as HTMLElement).id}`, { method: "DELETE" })
      .then(() => setTimeLoad(new Date));
  };

  return (
    <li className="note">
      <p className="note-text">{text}</p>
      <button className="delete-button material-icons" onClick={onClick} id={`${index}`}>close</button>
    </li>
  );
};
