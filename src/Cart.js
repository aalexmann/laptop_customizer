import React, { Component } from 'react';
import Total from './Total';

export default class Cart extends Component {
    render(){
        const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.state.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });

        return (
        <section className="main__summary">
            <h2>Your cart</h2>
                {summary}
            <Total
                state = { this.props.state }
            />
          )
        </section>
        )
    }
}