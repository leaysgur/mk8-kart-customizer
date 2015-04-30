define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let { RouteHandler, Link } = Router;

    let App = React.createClass({
        render() {
            return (
                <div>
                    <div>ローダーとか</div>
                    <Link to="/">Top</Link>へ
                    <hr />
                    <RouteHandler />
                </div>
            );
        }
    });

    return App;
});
