import React from 'react';
import List from './List';

class Dropdown extends React.Component {

    static defaultProps = {
        options: []
    }

    constructor() {
        super();
        
        this.state = {
            activeItem: null,
            open: false,
		};
    }

    toggle = () => {
		this.setState(previous => ({
			open: !previous.open
		}));
	} 
    
    selectItem = (value) => {
        this.setState({
            activeItem: value,
            open: false,
        })
    }

    render(){

        const {
            options,
            className,
            holderClassName,
        } = this.props;

		const open = this.state.open;

        return (
            <div className={holderClassName}>
                <button className={`toggle ${open ? 'active' : ''}`} onClick={this.toggle}>{this.state.activeItem ? this.state.activeItem : 'Open drop menu'}</button>
                {
                    this.state.open ? <List options={options} className={className} selectItem={this.selectItem} /> : null
                }
            </div>
        );
    }
}

export default Dropdown;