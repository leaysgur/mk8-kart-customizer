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
                driverList: DriverModel.selectAll()
            };
        },

        render() {
            return (
                <div>
                    <h1>ドライバー選択</h1>

                    <KartStatusView />
                    <hr />
                    <DriverListView driverList={this.state.driverList} />
                    <Link to="/custom/">決定</Link>

                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomControllerView;
});
