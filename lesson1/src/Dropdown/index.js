import React from 'react';

class Dropdown extends React.Component {

    static defaultProps = {
        options: []
    }

    constructor() {
        super();
        
        this.state = {
			active: false
		};

		this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
		this.setState(previous => ({
			active: !previous.active
		}));
	} 

    render(){

        const {
            options,
            className,
            holderClassName,
        } = this.props;

        const items = this.props.items;
		const active = this.state.active;

        return (
            <div className={holderClassName}>
                <button className={`toggle ${active ? 'active' : ''}`} onClick={this.toggle}>Show menu</button>
                
                {
                    this.state.active
                    ? (
                    <ul className={className} >
                        {options.map((item, i) => (
                        <li key={i}>
                            {item.option} 
                        </li>
                        ))}
                    </ul>
                    )
                    : (
                    null
                    )
                }
            </div>
        );
    }
}

export default Dropdown;