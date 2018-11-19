import React,{Component} from 'react';

export default class Form extends Component {

    nameEventRef = React.createRef();
    catRef = React.createRef();

    showOptions = (key) =>{
        const cat = this.props.categories[key]
        const {id, name} = cat;
    
        if (!id || !name) return null;

        return (
            <option key={id} value={id}>{name}</option>
        )
    }


    searchForEvents = (e) => {
        e.preventDefault()

        //Create object
        const data = {
            name : this.nameEventRef.current.value,
            category : this.catRef.current.value
        }

        //pass it by props
        this.props.getAllEvents(data);
    }

    render() {

        const categories = Object.keys(this.props.categories);

        return (
            <form onSubmit={this.searchForEvents}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Search for your events by categories
                    </legend>
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nameEventRef} className="uk-input" type="text" placeholder="Name of event or city"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.catRef} className="uk-select">
                            {categories.map(this.showOptions)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Search</button>
                        </div>
                    </div>
                
                </fieldset>

            </form>
        );
    }
}