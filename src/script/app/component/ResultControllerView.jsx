define([
    'react',
    'common/Const',
    'app/model/DriverModel',
    'app/model/BodyModel',
    'app/model/TireModel',
    'app/model/GliderModel',
    'app/component/BtnView',
    'app/component/KartStatusView',
    'app/component/KartPartsListView'
], (
    React,
    Const,
    DriverModel,
    BodyModel,
    TireModel,
    GliderModel,
    BtnView,
    KartStatusView,
    KartPartsListView
) => {

    const ResultControllerView = React.createClass({
        getInitialState() {
            let customizeIdStr = atob(this.props.params.customizeId);
            let [driverId, bodyId, tireId, gliderId] = customizeIdStr.split('_');
            return {
                selectedDriver: DriverModel.selectById(driverId),
                selectedBody:   BodyModel.selectById(bodyId),
                selectedTire:   TireModel.selectById(tireId),
                selectedGlider: GliderModel.selectById(gliderId)
            };
        },
        _getShareUrl() {
            let text   = encodeURIComponent(Const.SHARE_URL.TEXT + location.href);

            return {
                app: Const.SHARE_URL.APP + text,
                web: Const.SHARE_URL.WEB + text
            };
        },
        render() {
            let { app: shareAppUrl, web: shareWebUrl } = this._getShareUrl();

            return (
                <section className="lContentWrap cContentWrap">
                    <h1 className="cHeading mLv1">カスタマイズ結果</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <hr className="cSpacer mSizeS" />

                    <BtnView to={shareAppUrl} label="Twitterにシェア(App)" primary custom />
                    <BtnView to={shareWebUrl} label="Twitterにシェア(Web)" primary custom />

                    <hr className="cSpacer mSizeS" />

                    <BtnView to={`/custom/${this.state.selectedDriver.id}`} label="選びなおす" />
                    <BtnView to="/" label="トップへ" />
                </section>
            );
        }
    });

    return ResultControllerView;
});
