define([
    'react', 'react-router',
    'app/model/DriverModel',
    'app/model/BodyModel',
    'app/model/TireModel',
    'app/model/GliderModel',
    'app/component/KartStatusView',
    'app/component/KartPartsListView'
], (
    React,
    Router,
    DriverModel,
    BodyModel,
    TireModel,
    GliderModel,
    KartStatusView,
    KartPartsListView
) => {

    let { Link } = Router;

    const CustomControllerView = React.createClass({
        getInitialState() {
            return {
                selectedDriver: DriverModel.selectById(this.props.params.id),
                selectedBody:   BodyModel.selectById(20101),
                selectedTire:   TireModel.selectById(30101),
                selectedGlider: GliderModel.selectById(40101),
                bodyList:       BodyModel.selectAll(),
                tireList:       TireModel.selectAll(),
                gliderList:     GliderModel.selectAll()
            };
        },
        _onSelectItem(type, item) {
            // TODO: const
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
            return (
                <div>
                    <h1>カートパーツ選択</h1>

                    <KartStatusView
                        selectedDriver={this.state.selectedDriver}
                        selectedBody={this.state.selectedBody}
                        selectedTire={this.state.selectedTire}
                        selectedGlider={this.state.selectedGlider}
                    />

                    <KartPartsListView type="body" itemList={this.state.bodyList} onSelectItem={this._onSelectItem} />
                    <hr />
                    <KartPartsListView type="tire" itemList={this.state.tireList} onSelectItem={this._onSelectItem} />
                    <hr />
                    <KartPartsListView type="glider" itemList={this.state.gliderList} onSelectItem={this._onSelectItem} />


                    <hr />
                    <Link to="/custom">選びなおす</Link>
                </div>
            );
        }
    });

    return CustomControllerView;
});
