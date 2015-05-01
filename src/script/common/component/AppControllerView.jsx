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
                    <header>MarioKart8 Kart Customizer</header>
                    <RouteHandler {...this.props} />
                    <footer>@leader22</footer>
                </div>
            );
        }
    });

    return AppControllerView;
});
