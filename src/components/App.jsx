import { Component } from "react";

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {

  };



  render() {
    return (
      <>
        <Searchbar />
        <img
          src="../image/search.svg"
          alt=""
          width={512}
          height={512}
        />
      </>
    );
  };
};
