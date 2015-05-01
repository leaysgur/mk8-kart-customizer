define([
    'react'
], (
    React
) => {

    const DriverListView = React.createClass({
        propTypes: {
            driverList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        },
        render() {
            return (
                <ul>
                    {this.props.driverList.map((driver) => {return (
                    <li key={driver.id}>
                        {driver.name}
                    </li>
                    );})}
                </ul>
            );
        }
    });

    return DriverListView;
});
