import React, { Component } from "react";
import "./VendingMachine.css";
interface VendingMachineState {}
interface VendingMachineProps {}
class VendingMachine extends Component<
  VendingMachineProps,
  VendingMachineState
> {
  constructor(props: VendingMachineProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default VendingMachine;
