import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addFeature, removeFeature, addMoney } from "./actions";

//Step 1 import

const App = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const addItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.addMoney(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures remove={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures add={addItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature, addMoney }
)(App);
