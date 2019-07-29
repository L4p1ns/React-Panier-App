import React, { Component } from 'react';

class Article extends Component {
    state= {
        quantite:2,
        article:[
            {
                id:1,
                nom: "sucre",
                prix:800,
            },
            {
                id:2,
                nom:"Lait",
                prix:300,

            },
            {
                id:3,
                nom:"Arico",
                prix:200
            }
        ]

    };

    render() {
        // let classes = "badge m-2";
        // classes+= this.state.quantite===0 ?
        return (
            <div>
               {/* <span>{this.state.article.nom}</span> */}
               <span className="badge badge-primary m-2">{this.formatQuantite()}</span>
              <span>
              {this.getData()}
              </span>
            <button className="btn btn-secondary btn-sm">
                <i className="fa fa-plus"></i>
            </button>
            </div>
        );
    }

    getData(){
        const { quantite, article } = this.state;

        return article.map((art, key) => {
            return (
                <p key={art.id}>
                    {art.nom} - {art.prix}
                </p>

            );
        })
    }
    formatQuantite(){
        const { quantite, article } = this.state;
        return quantite === 0? "zero" : quantite;
    }
}
export default Article;
