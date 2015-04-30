require([
    'react', 'react-router',
    'app/Routes',
], (
    React,
    Router,
    AppRoutes
) => {

    class Main {
        constructor() {
            // データ取ってきたり？
        }

        start() {
            Router.run(AppRoutes, function (Handler) {
                React.render(
                    <Handler />,
                    document.body
                );
            });
        }
    }

    return (new Main()).start();
});
