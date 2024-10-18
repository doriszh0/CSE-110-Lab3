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

//EXERCISE
test("reads properly notes 1 and 2", () => {
    render(<StickyNotes />);

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

test("test delete all", () => {
    render(<StickyNotes />);

    const note1Text = screen.getAllByText("test note 1 title");
    const note2Text = screen.getAllByText("test note 2 title");
    const note3Text = screen.getAllByText("test note 3 title");
    const note4Text = screen.getAllByText("test note 4 title");
    const note5Text = screen.getAllByText("test note 5 title");
    const note6Text = screen.getAllByText("test note 6 title");

    const deleteNote = screen.getAllByText("x");

    if (deleteNote.length == 0) {
        fail();
    }
    for (let i = 0; i < deleteNote.length; i++) {
        fireEvent.click(deleteNote[i]);
    }

    expect(note1Text[0]).not.toBeInTheDocument();
    expect(note2Text[0]).not.toBeInTheDocument();
    expect(note3Text[0]).not.toBeInTheDocument();
    expect(note4Text[0]).not.toBeInTheDocument();
    expect(note5Text[0]).not.toBeInTheDocument();
    expect(note6Text[0]).not.toBeInTheDocument();
})

test("test like", () => {
    render(<StickyNotes />);

    let noteText = screen.getAllByText("test note 1 title");

    const unlikeNote = screen.getAllByText("🤍");

    if (unlikeNote.length == 0) {
        fail();
    }
    fireEvent.click(unlikeNote[0])


    const likeNote = screen.getAllByText("❤️");
    if (noteText.length == 0 || likeNote.length == 0) {
        fail();
    }
    expect(likeNote[0]).toBeInTheDocument();

    noteText = screen.getAllByText("test note 1 title");
    expect(noteText.length).toEqual(2);

}
)

