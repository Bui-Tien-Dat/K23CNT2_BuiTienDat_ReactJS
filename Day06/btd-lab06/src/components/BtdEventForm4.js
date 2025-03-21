import React, { Component } from "react";

class BtdEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btdSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    btdHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.btdSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            btdSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    btdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.btdSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.btdSelectCheckBox.includes("Apple")}
              onChange={this.btdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.btdSelectCheckBox.includes("Banana")}
              onChange={this.btdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.btdSelectCheckBox.includes("Orange")}
              onChange={this.btdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.btdHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BtdEventForm4;