define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const CustomLayout = React.createClass({
        render() {
            return (
                <div>
                    <h1>ドライバー選択</h1>

                    <Link to="/custom/110001">まりお</Link>
                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomLayout;
});
