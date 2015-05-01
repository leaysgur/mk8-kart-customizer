define([
    'react', 'react-router',
    'app/model/DriverModel',
    'app/model/BodyModel',
    'app/model/TireModel',
    'app/model/GliderModel',
    'app/component/KartStatusView',
    'app/component/DriverListView'
], (
    React,
    Router,
    DriverModel,
    BodyModel,
    TireModel,
    GliderModel,
    KartStatusView,
    DriverListView
) => {

    let { Link } = Router;

    const CustomDriverControllerView = React.createClass({
        getInitialState() {
            return {
                selectedDriver: DriverModel.selectById(10101),
                selectedBody:   BodyModel.getSelectedSkelton(),
                selectedTire:   TireModel.getSelectedSkelton(),
                selectedGlider: GliderModel.getSelectedSkelton(),
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

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <DriverListView driverList={this.state.driverList} onSelectDriver={this._onSelectDriver} />
                    <Link to={'/custom/' + this.state.selectedDriver.id}>決定</Link>

                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomDriverControllerView;
});
