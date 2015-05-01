define([
    'react', 'react-router',
    'app/model/DriverModel',
    'app/component/KartStatusView',
    'app/component/DriverListView'
], (
    React,
    Router,
    DriverModel,
    KartStatusView,
    DriverListView
) => {

    let { Link } = Router;

    const CustomControllerView = React.createClass({
        getInitialState() {
            return {
                selectedDriver: DriverModel.selectById(10101),
                driverList: DriverModel.selectAll()
            };
        },
        _onSelectDriver(driver) {
            this.setState({
                selectedDriver: driver
            });
        },

        render() {
            return (
                <div>
                    <h1>ドライバー選択</h1>

                    <KartStatusView selectedDriver={this.state.selectedDriver} />
                    <hr />
                    <DriverListView driverList={this.state.driverList} onSelectDriver={this._onSelectDriver} />
                    <Link to="/custom/">決定</Link>

                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomControllerView;
});
