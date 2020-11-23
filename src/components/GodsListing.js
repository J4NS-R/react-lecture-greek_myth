import React from 'react';
import greekGods from '../greeks.json';
import GreekGod from "./GreekGod";

export default class GodsListing extends React.Component {

    constructor(props) {
        super(props);

        // setting a blanks state
        this.state = {
            selectedGods: []
        }

        // binding to this
        this.onGodClick = this.onGodClick.bind(this);
    }

    // can you think of a more efficient way of doing this?
    onGodClick(selectedName){
        // if god is in selection-list
        const index = this.state.selectedGods.indexOf(selectedName)
        if (index >= 0){
            // drop a god
            this.state.selectedGods.splice(index, 1);
            this.setState({
                selectedGods: this.state.selectedGods
            });

        }else{ // god not in list
            this.state.selectedGods.push(selectedName);
            this.setState({
                selectedGods: this.state.selectedGods
            });
        }
    }

    render() {
        return (<div className="flex-container">
            {greekGods.map(godData => {
                return <div onClick={()=>this.onGodClick(godData.name)}
                            key={godData.name}>
                <GreekGod greekData={godData}
                selected={this.state.selectedGods.indexOf(godData.name) >= 0}/>
                </div>
            })}
        </div>);
    }

}

