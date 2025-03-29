import React from "react";

export type SetTimeLoadType = React.Dispatch<React.SetStateAction<Date>>;

export type OneViewNotePropsType = {
  text: string,
  index: number,
  setTimeLoad: SetTimeLoadType
};

export type AddNotePropType = {
  setTimeLoad: SetTimeLoadType
};

export type ViewNotesPropsType = {
  setTimeLoad: SetTimeLoadType,
  timeLoad: Date
}

export type ListNoteItemType = {
  id: number,
  content: string
}
