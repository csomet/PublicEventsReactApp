import React from 'react';

const EventItem = (props) => {
    
    const {name} = props.info;
    let desc = props.info.description.text;

    if (desc.length > 150){
        desc = desc.substr(0,150) + '...';
    }

   
    if (!name) return null;
   
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {props.info.logo !== null ? 
                    <img src={props.info.logo.url} alt={props.info.name.text}/>
                    : ''
                } 
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.info.name.text}</h3>
                    <p>{desc}</p>
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={props.info.url} target="_blank" >More info</a>
                </div>
            </div>
        </div>
    );
};

export default EventItem;