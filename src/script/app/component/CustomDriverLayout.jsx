define([
    'react', 'react-router',
    'app/model/DriverModel'
], (
    React,
    Router,
    DriverModel
) => {

    let { Link } = Router;

    const CustomLayout = React.createClass({
        render() {
            return (
                <div>
                    <h1>ドライバー選択</h1>

                    <ul>
                        {DriverModel.selectAll().map((driver) => {return (
                        <li key={driver.id}>
                            <Link to={"/custom/"+ driver.id}>{driver.name}</Link>
                        </li>
                        );})}
                    </ul>

                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomLayout;
});
