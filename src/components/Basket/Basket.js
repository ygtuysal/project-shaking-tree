import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Apple from "../Apple/Apple";
import PropTypes from "prop-types";

class Basket extends React.Component {
  static propTypes = {
    basket: PropTypes.array,
  };

  render() {
    const { basket } = this.props;

    return (
      <div className={"basket"}>
        <div className="apples">
          <img
            style={{ zIndex: 1, position: "relative", opacity: 0.5 }}
            width={200}
            height={150}
            src={require("../../images/shopping-basket.svg")}
            alt="basket"
          />
          {basket.length > 0 &&
            _.map(basket, (index, indis) => (
              <Apple
                key={index}
                style={{ top: `55%`, left: `${indis * 3 + 35}%`, zIndex: 3 }}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  basket: state.basket.basket,
});

Basket = connect(mapStateToProps)(Basket);

export default Basket;
