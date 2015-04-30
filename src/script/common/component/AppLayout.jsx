define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let { RouteHandler, Link } = Router;

    const AppLayout = React.createClass({
        render() {
            return (
                <div>
                    <div>ローダーとか</div>
                    <Link to="/">Top</Link>へ
                    <hr />
                    <RouteHandler {...this.props} />
                </div>
            );
        }
    });

    return AppLayout;
});
