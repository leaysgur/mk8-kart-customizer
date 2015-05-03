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
                <div className="lAppWrap">
                    <header className="cHeader lHeader">
                        MarioKart8 Kart Customizer
                    </header>

                    <RouteHandler {...this.props} />

                    <footer className="cFooter lFooter">
                       Created by <a href="https://twitter.com/leader22" target="_blank">@leader22</a>
                    </footer>
                </div>
            );
        }
    });

    return AppControllerView;
});
