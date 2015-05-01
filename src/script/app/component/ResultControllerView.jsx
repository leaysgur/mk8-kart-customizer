define([
    'react', 'react-router',
    'common/Const',
    'app/model/DriverModel',
    'app/model/BodyModel',
    'app/model/TireModel',
    'app/model/GliderModel',
    'app/component/KartStatusView',
    'app/component/KartPartsListView'
], (
    React,
    Router,
    Const,
    DriverModel,
    BodyModel,
    TireModel,
    GliderModel,
    KartStatusView,
    KartPartsListView
) => {

    let { Link } = Router;

    const ResultControllerView = React.createClass({
        getInitialState() {
            let customizeId = atob(this.props.params.customizeId);
            let [driverId, bodyId, tireId, gliderId] = customizeId.split('_');
            return {
                selectedDriver: DriverModel.selectById(driverId),
                selectedBody:   BodyModel.selectById(bodyId),
                selectedTire:   TireModel.selectById(tireId),
                selectedGlider: GliderModel.selectById(gliderId)
            };
        },
        render() {
            return (
                <section>
                    <h1>カスタマイズ結果</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <Link to={`/custom/${this.state.selectedDriver.id}`}>選びなおす</Link>
                </section>
            );
        }
    });

    return ResultControllerView;
});
