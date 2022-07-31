export const loadNotes = () => {
  const savedItems = JSON.parse(localStorage.getItem("notes"));
  const notesPromise = savedItems
    ? Promise.resolve(savedItems)
    : Promise.resolve([
        {
          id: 1,
          title: "delectus aut autem",
          content:
            "Lorem ipsum",
          status: "New"
        },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          content:
            "Lorem ipsum",
          status: "Completed"
        },
        {
          id: 3,
          title: "fugiat veniam minus",
          content:
            "Lorem ipsum",
          status: "Not completed"
        }
      ]);

  return notesPromise;
};

export const saveNotes = notes =>
  localStorage.setItem("notes", JSON.stringify(notes)) && loadNotes();
