define([
    'react'
], (
    React
) => {

    const DriverListItemView = React.createClass({
        propTypes: {
            driver: React.PropTypes.object.isRequired,
            onSelectDriver: React.PropTypes.func.isRequired
        },
        _onClickDriver() {
            this.props.onSelectDriver(this.props.driver);
        },
        render() {
            return (
                <li onClick={this._onClickDriver}>
                    {this.props.driver.name}
                </li>
            );
        }
    });

    return DriverListItemView;
});

