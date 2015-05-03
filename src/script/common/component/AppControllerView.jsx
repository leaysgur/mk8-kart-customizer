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
                <div className="l-app-wrap">
                    <header className="l-header">MarioKart8 Kart Customizer</header>
                    <RouteHandler {...this.props} />
                    <footer className="l-footer">@leader22</footer>
                </div>
            );
        }
    });

    return AppControllerView;
});
