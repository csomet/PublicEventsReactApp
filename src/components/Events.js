import React,{Component} from 'react';
import EventItem from './EventItem';

export default class Events extends Component {

    render() {
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                {Object.keys(this.props.events).map( key => (
                    <EventItem key={key} info={this.props.events[key]} />
                ))}
            </div>
        );
    }
}