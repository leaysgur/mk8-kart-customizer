require([
    'react', 'react-router',
    'app/Routes',
    'app/data/DriverData', 'app/model/DriverModel'
], (
    React,
    Router,
    AppRoutes,
    DriverData,
    DriverModel
) => {

    class Main {
        constructor() {
            DriverModel.init(DriverData);

            React.initializeTouchEvents(true);
        }

        start() {
            Router.run(AppRoutes, (Handler, state) => {
                React.render(
                    <Handler params={state.params} />,
                    document.body
                );
            });
        }
    }

    return (new Main()).start();
});
