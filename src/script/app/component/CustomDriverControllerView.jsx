define([
    'react',
    'common/Const',
    'app/model/DriverModel',
    'app/model/BodyModel',
    'app/model/TireModel',
    'app/model/GliderModel',
    'app/component/BtnView',
    'app/component/KartStatusView',
    'app/component/DriverListView'
], (
    React,
    Const,
    DriverModel,
    BodyModel,
    TireModel,
    GliderModel,
    BtnView,
    KartStatusView,
    DriverListView
) => {

    const CustomDriverControllerView = React.createClass({
        getInitialState() {
            return {
                selectedDriver: DriverModel.selectById(Const.DEFAULT_CUSTOMIZE.DRIVER),
                selectedBody:   BodyModel.getSelectedSkelton(),
                selectedTire:   TireModel.getSelectedSkelton(),
                selectedGlider: GliderModel.getSelectedSkelton(),
                driverList:     DriverModel.selectAll()
            };
        },
        _onSelectDriver(driver) {
            this.setState({
                selectedDriver: driver
            });
        },

        render() {
            return (
                <section className="lContentWrap cContentWrap">
                    <h1 className="cHeading mLv1">ドライバー選択</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <hr className="cSpacer mSizeS" />

                    <DriverListView driverList={this.state.driverList} onSelectDriver={this._onSelectDriver} />

                    <BtnView to={'/custom/' + this.state.selectedDriver.id} label="パーツ選択へ" />
                    <BtnView to="/" label="トップへ" />
                </section>
            );
        }
    });

    return CustomDriverControllerView;
});
