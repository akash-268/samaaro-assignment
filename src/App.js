import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");

  function select1Handler(e) {
    setSelect1(e.target.value);
    // console.log(e.target.value);
  }
  function select2Handler(e) {
    setSelect2(e.target.value);
    // console.log(e.target.value);
  }
  function select3Handler(e) {
    setSelect3(e.target.value);
    // console.log(e.target.value);
  }
  function formsubmitHandler(e){
    e.preventDefault()
    console.log(select1);
    console.log(select2);
    console.log(select3);
  }
  function disabledButtonHandler(){
    console.log('Select all values')
  }
  const [input,setInput] = useState([]);
  const options = ['A','B','C','D','E']
  return (
    <div>
      <Form className="form_control">
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            className="form_option"
            onChange={select1Handler}
            value={select1}
          >
            <option>Dropdown 1</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="form_option"
            onChange={select2Handler}
            value={select2}
          >
            <option>Dropdown 2</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="form_option"
            onChange={select3Handler}
            value={select3}
          >
            <option>Dropdown 3</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </Form.Select>
          {(select1 && select2 && select3)?
          <Button type='submit' onClick={formsubmitHandler}>Submit</Button>
          :
          <Button  onClick={disabledButtonHandler}>Submit</Button>}
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
