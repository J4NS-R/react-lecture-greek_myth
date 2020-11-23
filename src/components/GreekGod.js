import React from 'react';

export default class GreekGod extends React.Component {

    // technically not necessary. This just helps us
    // remember what the passed-in props look like
    static defaultProps = {
        greekData: {
            name: 'Example God',
            desc: 'God of examples',
            img: 'example.jpg',
        },
        selected: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            views: -1,
        }

        // bind to the self
        this.getViews = this.getViews.bind(this);
    }

    componentDidMount() {
        this.getViews();
    }

    async getViews(){
        const views = await GreekGod.wikiViews(this.props.greekData.name);
        this.setState({
            views: views
        });
    }

    static async wikiViews(articleTitle){
        // example: https://en.wikipedia.org/w/api.php?action=query&prop=pageviews&titles=Apollo
        const url = new URL('https://en.wikipedia.org/w/api.php');
        url.searchParams.append('action', 'query');
        url.searchParams.append('prop', 'pageviews');
        url.searchParams.append('format', 'json');
        url.searchParams.append('origin', '*');
        url.searchParams.append('titles', articleTitle);
        const respData = await fetch(url).then(data => data.json())
        const pages = respData['query']['pages'];
        const page = pages[Object.keys(pages)[0]];
        const days = Object.keys(page['pageviews']);
        days.sort();
        return page['pageviews'][days[days.length-1]];
    }

    render() {
        return (
            <div className={`god-container ${this.props.selected ? 'god-selected' : ''}`}>
                <h3>{this.props.greekData.name}</h3>
                <img src={'/greeks/'+this.props.greekData.img} alt={this.props.greekData.name}/>
                <p style={{fontSize: '.8em'}}>{this.props.greekData.desc}</p>
                <p><strong>{this.state.views === -1 ? 'Fetching views...' : this.state.views + ' views today'}</strong></p>
            </div>
        );
    }

}
