import React, { Component } from "react";

class Article extends Component {
    // componentDidMount(){
    //     this.props.getDonnee();
    // }
  state = { quantite: this.props.quantite };
  render() {
    return (
      <div>
        {this.props.articles.nom}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatQuantite()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.articles)}
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onSupprimer(this.props.articles.id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.articles.quantite === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatQuantite() {
    const { quantite } = this.props.articles;
    return quantite === 0 ? "Zero" : quantite.toLocaleString();
  }
}
export default Article;
