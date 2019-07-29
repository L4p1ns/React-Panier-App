import React, { Component } from "react";
import Article from "./Article";

class Articles extends Component {

  render() {
    // let classes = "badge m-2";
    // classes+= this.state.quantite===0 ?
    // console.log("Articles:",this.props.articles);
    return (

      <div>
        {/* onClick={this.props.onReset} */}



        {this.props.articles.map(article => (
          <Article
            key={article.id}
            articles={article}
            onSupprimer={this.props.onSupprimer}
            onIncrement={this.props.onIncrement}
          >
            <h4>{article.nom}</h4>
          </Article>
        ))}
      </div>
    );
  }
  onSupprimer() {}
  getData() {
    const { quantite, article } = this.state;

    return article.map((art, key) => {
      return (
        <p key={art.id}>
          {art.nom} - {art.prix}
        </p>
      );
    });
  }

  onIncrement() {}

  handleIncrement = article => {
    const articles = [...this.state.articles];
    const index = articles.indexOf(article);
    articles[index].quantite++;
    this.setState({
      articles
    });
  };
}
export default Articles;
