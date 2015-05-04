define([
    'react',
    'app/component/DriverListItemView'
], (
    React,
    DriverListItemView
) => {

    const DriverListView = React.createClass({
        propTypes: {
            driverList:       React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
            onSelectDriver:   React.PropTypes.func.isRequired,
            selectedDriver:   React.PropTypes.object.isRequired
        },
        _onSelectDriver(driver) {
            this.props.onSelectDriver(driver);
        },
        render() {
            return (
                <ul className="cColumn">
                    {this.props.driverList.map((driver) => {return (
                    <DriverListItemView driver={driver} onSelectDriver={this._onSelectDriver} key={driver.id} isSelected={driver.id === this.props.selectedDriver.id} />
                    );})}
                </ul>
            );
        }
    });

    return DriverListView;
});
