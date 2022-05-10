import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useState} from "react";

function App() {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");

  function select1Handler(e) {
    setSelect1(e.target.value);
  }

  function select2Handler(e) {
    setSelect2(e.target.value);
  }

  function select3Handler(e) {
    setSelect3(e.target.value);
  }

  function formsubmitHandler(e) {
    e.preventDefault();
    console.log(select1, select2, select3);
    setSelect1('')
    setSelect2('')
    setSelect3('')
  }

  function disabledButtonHandler() {
    alert("Error!!! Please Select all values");
    setSelect1("");
    setSelect2("");
    setSelect3("");
  }

  const options = ["A", "B", "C", "D", "E"];

  function availableOptions(option) {
    return option !== select1 && option !== select2 && option !== select3;
  }

  return (
    <div id="body">
      <Form className="form_control">
        <Form.Group className="mb-3">
          <Form.Select
            className="form_option"
            onChange={select1Handler}
            value={select1}
          >
            {select1 === "" && <option>Select a Value</option>}
            {!(select1 === "") && <option value={select1}>{select1}</option>}
            {options.filter(availableOptions).map((each, key) => (
              <option value={each} key={key}>
                {each}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="form_option"
            onChange={select2Handler}
            value={select2}
          >
            {select2 === "" && <option>Select a Value</option>}
            {!(select2 === "") && <option value={select2}>{select2}</option>}
            {options.filter(availableOptions).map((each, key) => (
              <option value={each} key={key}>
                {each}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="form_option"
            onChange={select3Handler}
            value={select3}
          >
            {select3 === "" && <option>Select a Value</option>}
            {!(select3 === "") && <option value={select3}>{select3}</option>}
            {options.filter(availableOptions).map((each, key) => (
              <option value={each} key={key}>
                {each}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {select1 && select2 && select3 ? (
          <Button variant="success" type="submit" onClick={formsubmitHandler}>
            Submit
          </Button>
        ) : (
          <Button variant="secondary" onClick={disabledButtonHandler}>
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
}

export default App;
