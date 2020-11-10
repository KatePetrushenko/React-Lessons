import React from 'react';

class Dropdown extends React.Component {

    static defaultProps = {
        options: []
    }

    render(){

        const {
            options,
            className,
            holderClassName,
            openerClassName,
        } = this.props;

        return (
            <div className={holderClassName}>
                <div className={openerClassName}>test</div>
                <ul className={className}>
                    {options.map((item, i) => (
                    <li key={i}>
                        {item.option} 
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Dropdown;