import React, { Component } from "react";
import "./App.scss";

import Minus from "./svg/Minus";
import Plus from "./svg/Plus";
import Pizza from "./svg/Pizza";
import User from "./svg/User";
import Kid from "./svg/Kid";
import { onUserCountChange, onPizzaCountChange } from "./utils";

const pizzaType = [
  { size: 20, type: "small" },
  { size: 24, type: "medium" },
  { size: 28, type: "large" }
];

export default class App extends Component {
  state = { small: 0, medium: 1, large: 0, adults: 1, child: 0 };

  handlePizzaCount = (type, operation) => {
    let newCount = this.state[type];
    if (operation === "inc") {
      newCount++;
    } else {
      newCount--;
    }
    const newState = onPizzaCountChange({
      ...this.state,
      [type]: newCount,
      type,
      operation
    });
    this.setState({ ...newState, [type]: newCount });
  };
  handleAdultCount = operation => {
    let adults = this.state.adults;
    if (operation === "inc") {
      adults++;
    } else {
      adults--;
    }
    const newState = onUserCountChange({
      adults: adults,
      child: this.state.child
    });
    console.log("adults", adults);
    this.setState({ ...newState, adults: adults });
  };
  handleChildCount = operation => {
    let child = this.state.child;
    if (operation === "inc") {
      child++;
    } else {
      child--;
    }
    const newState = onUserCountChange({
      child: child,
      adults: this.state.adults
    });
    this.setState({ ...newState, child: child });
  };

  render() {
    const { small, medium, large, adults, child } = this.state;
    const handleDecPizzaDisable = type => {
      // console.log(">>>>>>>>> ", adults, child, large, type);
      if (adults === 2 && child < 2 && large !== 0 && type === "large") {
        return true;
      }
      return this.state[type] <= 0;
    };
    const handleIncPizzaDisable = type => {
      return 150 * small + 200 * medium + 300 * large > 700;
    };
    return (
      <div className="App">
        <div className="App_title">
          Order <span className="bold-text">Pizza</span>
        </div>
        <div className="App_body">
          {pizzaType.map((pizza, index) => {
            const { size, type } = pizza;
            return (
              <div className="row pizza_type" key={index}>
                <Pizza size={size} />
                <div className="p_name">{type}</div>
                <div className="plus_minus_wrapper center">
                  <Minus
                    onClick={this.handlePizzaCount.bind(this, type, "dec")}
                    disabled={handleDecPizzaDisable(type)}
                  />
                </div>
                <div className="App_count">{this.state[type]}</div>
                <div className="plus_minus_wrapper center">
                  <Plus
                    onClick={this.handlePizzaCount.bind(this, type, "inc")}
                    disabled={handleIncPizzaDisable(type)}
                  />
                </div>
              </div>
            );
          })}
          <hr />
          <div className="row user_type">
            <div className="user_logo center">
              <User />
            </div>
            <div className="p_name">Adults</div>
            <div className="plus_minus_wrapper center">
              <Minus
                onClick={this.handleAdultCount.bind(this, "dec")}
                disabled={adults <= 1}
              />
            </div>
            <div className="App_count">{this.state.adults}</div>
            <div className="plus_minus_wrapper center">
              <Plus
                onClick={this.handleAdultCount.bind(this, "inc")}
                disabled={handleIncPizzaDisable()}
              />
            </div>
          </div>
          <hr />
          <div className="row user_type">
            <div className="user_logo center">
              <Kid />
            </div>
            <div className="p_name">Children</div>
            <div className="plus_minus_wrapper center">
              <Minus
                onClick={this.handleChildCount.bind(this, "dec")}
                disabled={child <= 0}
              />
            </div>
            <div className="App_count">{this.state.child}</div>
            <div className="plus_minus_wrapper center">
              <Plus
                onClick={this.handleChildCount.bind(this, "inc")}
                disabled={handleIncPizzaDisable()}
              />
            </div>
          </div>
        </div>
        <div className="row App_total">
          <div className="App_title">
            Order <span className="bold-text">Total</span>
          </div>
          <div>{150 * small + 200 * medium + 300 * large}</div>
        </div>
      </div>
    );
  }
}
