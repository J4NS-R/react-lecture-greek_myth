import React from 'react';
import greekGods from '../greeks.json';
import GreekGod from "./GreekGod";

export default class GodsListing extends React.Component {

    render() {
        return (<div className="flex-container">
            {greekGods.map(godData => {
                return <GreekGod greekData={godData} key={godData.name}/>
            })}
        </div>);
    }

}

