import React from 'react';

export default class GreekGod extends React.Component {

    // technically not necessary. This just helps us
    // remember what the passed-in props look like
    static defaultProps = {
        greekData: {
            name: 'Example God',
            desc: 'God of examples',
            img: 'example.jpg',
        }
    }

    render() {
        return (
            <div className="god-container">
                <h3>{this.props.greekData.name}</h3>
                <img src={'/greeks/'+this.props.greekData.img} alt={this.props.greekData.name}/>
                <p style={{fontSize: '.8em'}}>{this.props.greekData.desc}</p>
            </div>
        );
    }

}
