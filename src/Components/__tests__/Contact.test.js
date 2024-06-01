import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component test Cases", ()=>{

    test("Should Load Contact component", () => {
        render(<Contact />);
    
       const heading = screen.getByRole("heading");
    
       expect(heading).toBeInTheDocument();
       
    })
    
    test("Should load Button inside Contact component", ()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name is inside the contact comp", () =>{
        render(<Contact />);
        const input = screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    
    })
    
    
    test("Should load 2 input text box in contact comp", () =>{
        render(<Contact />);
    
        const input = screen.getAllByRole("textbox");
        console.log(input.length);
      expect(input.length).toBe(2);
    })
})

