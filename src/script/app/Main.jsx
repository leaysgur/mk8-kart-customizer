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
            Router.run(AppRoutes, function (Handler, state) {
                let params = state.params;
                React.render(
                    <Handler params={params} />,
                    document.body
                );
            });
        }
    }

    return (new Main()).start();
});
