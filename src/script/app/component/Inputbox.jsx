define([
    'react'
], (
    React
) => {

    let Inputbox = React.createClass({
        propTypes: {
            onUpdate: React.PropTypes.func.isRequired
        },

        getInitialState() {
            return {
                value: 'Hello new world!'
            };
        },

        _onChange(ev) {
            let val = ev.target.value;
            this.setState({
                value: val
            });

            this.props.onUpdate(val);
        },

        render() {
            return (
                <div>
                    <input type="text" value={this.state.value} onChange={this._onChange} />
                </div>
            );
        }
    });

    return Inputbox;
});
