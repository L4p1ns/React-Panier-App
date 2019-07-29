import React, { Component } from "react";
import Articles from "./components/Articles";
import Reset from "./components/Reset";
import { arrayPattern } from "@babel/types";

class App extends Component {
  state = {
    articles: [
      { id: 1, nom: "Lait", quantite: 2 },
      { id: 2, nom: "Café", quantite: 12 },
      { id: 3, nom: "Sucre", quantite: 1 }
    ]
  };

  onReset = () => {
    const result = this.state.articles.map(art => {
      art.quantite = 0;
      return art;
    });
    this.setState({
      result
    });
  };
  handleSupprimer = idAricle => {
    const articles = this.state.articles.filter(a => a.id !== idAricle);
    this.setState({
      articles
    });
  };

  render() {
    // console.log("Article App: ",this.state.articles);

    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <main className="container">
          <Reset onReset={this.onReset} />
          <Articles
            onSupprimer={this.handleSupprimer}
            // onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            articles={this.state.articles}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
