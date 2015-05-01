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
                <div>
                    <h1>カートパーツ選択</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <KartPartsListView type="body"   itemList={this.state.bodyList}   onSelectItem={this._onSelectItem} />
                    <hr />
                    <KartPartsListView type="tire"   itemList={this.state.tireList}   onSelectItem={this._onSelectItem} />
                    <hr />
                    <KartPartsListView type="glider" itemList={this.state.gliderList} onSelectItem={this._onSelectItem} />


                    <Link to={`/result/${resultStr}`}>カスタマイズ結果へ</Link>
                    <hr />
                    <Link to="/custom">選びなおす</Link>
                </div>
            );
        }
    });

    return CustomKartControllerView;
});
