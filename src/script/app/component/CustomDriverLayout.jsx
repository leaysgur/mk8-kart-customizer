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

    const CustomLayout = React.createClass({
        render() {
            return (
                <div>
                    <h1>ドライバー選択</h1>

                    <KartStatusView />
                    <hr />
                    <DriverListView driverList={DriverModel.selectAll()} />
                    <Link to="/custom/">決定</Link>

                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomLayout;
});
