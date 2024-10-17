import { render, screen, fireEvent, getAllByTestId, getAllByText } from "@testing-library/react";
import { ToDoList } from "./toDoList";

//test if grocery items appear in list
test("test Read", () => {
    render(<ToDoList/>);
    const item1 = screen.getByText("Apples");
    const item2 = screen.getByText("Bananas");
    const count = screen.getByText("Items bought: 0");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(count).toBeInTheDocument();
});

//CHECKBOX BY NAME
test("test banana checkbox", () => {
    render(<ToDoList/>);

    //get banana checkbox
    const checkbox = screen.getByTestId("Bananas");
    const countBefore = screen.getByText("Items bought: 0");

    expect(checkbox).not.toBeChecked();
    expect(countBefore).toBeInTheDocument();
    
    fireEvent.click(checkbox);

    const countAfter = screen.getByText("Items bought: 1");

    expect(checkbox).toBeChecked();
    expect(countAfter).toBeInTheDocument();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(countBefore).toBeInTheDocument();
});

test("test apple checkbox", () => {
    render(<ToDoList/>);

    //get apple checkbox
    const checkbox = screen.getByTestId("Apples");
    const countBefore = screen.getByText("Items bought: 0");

    expect(checkbox).not.toBeChecked();
    expect(countBefore).toBeInTheDocument();
    
    fireEvent.click(checkbox);

    const countAfter = screen.getByText("Items bought: 1");

    expect(checkbox).toBeChecked();
    expect(countAfter).toBeInTheDocument();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(countBefore).toBeInTheDocument();
});


//OLD TEST
// test("test checkbox apple", () => {
//     render(<ToDoList/>);

//     //get both checkboxes
//     const checkboxes = screen.getAllByRole("checkbox");
//     expect(checkboxes[0]).not.toBeChecked();
//     expect(checkboxes[1]).not.toBeChecked();
    
//     fireEvent.click(checkboxes[0]); //check apple

//     expect(checkboxes[1]).toBeChecked(); //apple becomes second item
//     expect(checkboxes[0]).not.toBeChecked(); //banana becomes first term
// });