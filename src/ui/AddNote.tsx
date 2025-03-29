import { useState, ChangeEvent, FormEvent } from "react";
import { AddNotePropType } from "../common/NotesComponentsTypes"

export const AddNote = ({setTimeLoad}: AddNotePropType) => {
  const [textContent, setTextContent] = useState("");

  const onchange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setTextContent(target.value);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const url = "http://localhost:7070/notes";

    const response = await fetch(url);;
    const data = await response.json();

    const dataPOST = {
      id: data.length,
      content: textContent
    };

    const postResponse = await fetch(url, {
      method: "POST",
      body: JSON.stringify(dataPOST)
    }); 
    console.log(postResponse);

    setTextContent("");
    
    setTimeLoad(new Date);
  };

  return (
    <div className="add-note-container">
      <h3 className="add-note-title">New Note</h3>
      <form className="add-note-form" onSubmit={onSubmit}>       
        <textarea className="input-note" onChange={onchange} value={textContent.trim()} required />
        <button className="add-button material-icons">send</button>
      </form>
    </div>
  );
}
