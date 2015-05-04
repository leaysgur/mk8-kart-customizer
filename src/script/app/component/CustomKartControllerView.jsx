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

    const CustomKartControllerView = React.createClass({
        getInitialState() {
            return {
                selectedDriver: DriverModel.selectById(this.props.params.id),
                selectedBody:   BodyModel.selectById(Const.DEFAULT_CUSTOMIZE.BODY),
                selectedTire:   TireModel.selectById(Const.DEFAULT_CUSTOMIZE.TIRE),
                selectedGlider: GliderModel.selectById(Const.DEFAULT_CUSTOMIZE.GLIDER),
                bodyList:       BodyModel.selectAll(),
                tireList:       TireModel.selectAll(),
                gliderList:     GliderModel.selectAll()
            };
        },
        _onSelectItem(type, item) {
            switch (type) {
            case 'body':
                this.setState({ selectedBody: item });
                break;
            case 'tire':
                this.setState({ selectedTire: item });
                break;
            case 'glider':
                this.setState({ selectedGlider: item });
                break;
            }
        },
        render() {
            let resultStr = btoa(`${this.state.selectedDriver.id}_${this.state.selectedBody.id}_${this.state.selectedTire.id}_${this.state.selectedGlider.id}`);
            return (
                <section className="lContentWrap cContentWrap">
                    <h1 className="cHeading mLv1">パーツ選択</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <hr className="cSpacer mSizeS" />

                    <KartPartsListView type="body"   itemList={this.state.bodyList}   onSelectItem={this._onSelectItem} />
                    <KartPartsListView type="tire"   itemList={this.state.tireList}   onSelectItem={this._onSelectItem} />
                    <KartPartsListView type="glider" itemList={this.state.gliderList} onSelectItem={this._onSelectItem} />

                    <hr className="cSpacer mSizeS" />

                    <BtnView to={`/result/${resultStr}`} label="カスタマイズ結果へ" />
                    <BtnView to="/custom" label="選びなおす" />
                </section>
            );
        }
    });

    return CustomKartControllerView;
});
