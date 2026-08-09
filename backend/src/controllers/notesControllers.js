export const getAllNotes = (req, res) => {
  res.status(200).json({
    message: "Get all notes",
  });
};

export const createNote = (req, res) => {
  res.status(201).json({
    message: "Note created successfully",
  });
};

export const updateNote = (req, res) => {
  res.status(201).json({
    message: "Note Updated successfully",
  });
};

export const deleteNote = (req, res) => {
  res.status(202).json({
    message: "Note Deleted successfully",
  });
};