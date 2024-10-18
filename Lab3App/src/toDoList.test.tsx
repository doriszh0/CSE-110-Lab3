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
describe("test both checkboxes individually", () => {
    const cases = [{item: "Bananas"}, {item: "Apples"}];

    test.each(cases)("checkbox each individually",({item}) => {
        render(<ToDoList/>);

        const checkboxBefore = screen.getByTestId(item);
        const countBefore = screen.getByText("Items bought: 0");

        expect(checkboxBefore).not.toBeChecked();
        expect(countBefore).toBeInTheDocument();
        
        fireEvent.click(checkboxBefore);

<<<<<<< HEAD
        const checkboxAfter = screen.getByTestId(item);
        const countAfter = screen.getByText("Items bought: 1");

        expect(checkboxAfter).toBeChecked();
        expect(countAfter).toBeInTheDocument();
    });
});


//CHECKBOX BOTH
describe("test both checkboxes together", () => {
    const cases = [{item1: "Bananas", item2: "Apples"}, {item1: "Apples", item2: "Bananas"}];

    test.each(cases)("checkbox both bananas and apples", ({item1, item2}) => {
        render(<ToDoList/>);

        const countBefore = screen.getByText("Items bought: 0");
        expect(countBefore).toBeInTheDocument();
=======
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
>>>>>>> db5a715c90105aa3667944bdc72167a437de06b5

        const checkbox1 = screen.getByTestId(item1);
        expect(checkbox1).not.toBeChecked();
        
        fireEvent.click(checkbox1);

        const checkbox1After = screen.getByTestId(item1);
        expect(checkbox1After).toBeChecked();

        const checkbox2 = screen.getByTestId(item2);
        expect(checkbox2).not.toBeChecked();
        
        fireEvent.click(checkbox2);

        const checkbox2After = screen.getByTestId(item2);
        expect(checkbox2After).toBeChecked();

 
        const countAfter = screen.getByText("Items bought: 2");
        expect(countAfter).toBeInTheDocument();

    });
});