define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let { RouteHandler, Link } = Router;

    const AppControllerView = React.createClass({
        render() {
            return (
                <div>
                    <Link to="/">Top</Link>へ
                    <hr />
                    <RouteHandler {...this.props} />
                </div>
            );
        }
    });

    return AppControllerView;
});
