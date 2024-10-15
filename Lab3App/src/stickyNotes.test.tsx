import { render, screen, fireEvent, getAllByTestId, getAllByText } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import exp from "constants";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});

test("renders create note form", () => {
    render(<StickyNotes />);
    const createNoteButton = screen.getByText("Create Note");
    expect(createNoteButton).toBeInTheDocument();
});






//EXERCISE
test("reads properly notes 1 and 2", () => {
    render(<StickyNotes />);

    // const noteText = screen.getByText("test note 2 title");
    // expect(noteText).toBeInTheDocument();

    // const noteLabel = screen.getByText("personal");
    // expect(noteLabel).toBeInTheDocument();

    // const noteContent = screen.getByText("test note 2 content");
    // expect(noteContent).toBeInTheDocument();

    const noteText = screen.getAllByText("test note 1 title");
    if (noteText.length == 0) {
        fail();
    }
    expect(noteText[0]).toBeInTheDocument();

    const noteLabel = screen.getAllByText("other");
    if (noteLabel.length == 0) {
        fail();
    }
    expect(noteLabel[0]).toBeInTheDocument();

    const noteContent = screen.getAllByText("test note 1 content");
    if (noteContent.length == 0) {
        fail();
    }
    expect(noteContent[0]).toBeInTheDocument();

    const note2Text = screen.getAllByText("test note 2 title");
    if (note2Text.length == 0) {
        fail();
    }
    expect(note2Text[0]).toBeInTheDocument();

    const note2Label = screen.getAllByText("personal");
    if (note2Label.length == 0) {
        fail();
    }
    expect(note2Label[0]).toBeInTheDocument();

    const note2Content = screen.getAllByText("test note 2 content");
    if (note2Content.length == 0) {
        fail();
    }
    expect(note2Content[0]).toBeInTheDocument();
})

test("test update", () => {
    render(<StickyNotes />);
    const noteText = screen.getAllByText("test note 1 title");

    if (noteText.length == 0) {
        fail();
    }

    fireEvent.focus(noteText[0]);
    fireEvent.change(noteText[0], { target: { textContent: "hi" } });

    expect(noteText[0].innerHTML).toEqual("hi");

    const noteContent = screen.getAllByText("test note 1 content");

    if (noteContent.length == 0) {
        fail();
    }
    
    fireEvent.focus(noteContent[0]);
    fireEvent.change(noteContent[0], { target: { textContent: "new content" } });

    expect(noteContent[0].innerHTML).toEqual("new content");

    const noteLabel = screen.getAllByText("other");

    if (noteLabel.length == 0) {
      fail();
    }

    fireEvent.focus(noteLabel[0]);
    fireEvent.change(noteLabel[0], { target: { textContent: "personal" } });

    expect(noteLabel[0].innerHTML).toEqual("personal");

})

test("test delete", () => {
    render(<StickyNotes />);

    const noteText = screen.getAllByText("test note 1 title");
    const note2Text = screen.getAllByText("test note 2 title");

    const deleteNote = screen.getAllByText("x");

    fireEvent.click(deleteNote[0])

    //test if gone
    if (noteText.length == 0) {
        fail();
    }
    expect(noteText[0]).not.toBeInTheDocument();

    fireEvent.click(deleteNote[1])

    if (note2Text.length == 0) {
        fail();
    }
    expect(note2Text[0]).not.toBeInTheDocument();
})

// test("tests update", () => {
//     fireEvent.click
// })