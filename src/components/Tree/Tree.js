import React from "react";
import { connect } from "react-redux";
import apples from "../Apple/apples";
import Apple from "../Apple/Apple";
import _ from "lodash";
import $ from "jquery";
import { setBasket } from "../../data/actions/locations";

class Content extends React.Component {
  state = {
    basket: [],
  };

  constructor(props) {
    super(props);
    this.applesDown = this.applesDown.bind(this);
  }

  applesDown() {
    const toplam = apples.length;
    const { basket } = this.props;
    for (let i = 0; i < toplam; i++) { //random süre ayarlanır,nesneler farklı zamanlarda birer birer inecek
      let time = ((Math.random() * toplam) / 2) * 1000;
      let apple = $(".apple:eq(" + i + ")");
      apple.animate(  //nesne en alta insin diye %100 yapıldı.
        {
          top: "100%",
        },
        time,
        () => {
          console.log(`${i}.elma düştü!`);
          setTimeout(() => {
            apple.remove();
            basket.push(i); 
            //her veri eklendikçe , propstan sepet verilerii geri çekerek güncelliyor
            let newItem = [...basket]; // verilerin değişmesi
            setBasket(newItem);
          }, 1000);
        }
      );
    }
  }

  shakeTree() {
    const content = $(".content");

    content.addClass("animated shake speed infinite");

    setTimeout(() => { //3 sn shake süresi olduğu belirtilen fonksiyondur.
      content.removeClass("animated shake infinite");
      this.applesDown();
    }, 3000);
  }

  render() {
    return (
      <div>
        <div className="headButton">
          <button onClick={this.shakeTree.bind(this)}>
            SHAKE AND BASKET APPLES!
          </button>
        </div>
        <div className={"content"}>
          <div className="apples">
            {_.map(apples, (n, index) => (
              <Apple key={index} style={n} />
            ))}
          </div>
          <img
            style={{ width: 512, height: 512 }}
            src={require("../../images/tree.svg")}
            alt={"Tree"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  basket: state.basket.basket,
});

Content = connect(mapStateToProps)(Content);

export default Content;
