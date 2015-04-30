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
        }

        start() {
            Router.run(AppRoutes, (Handler, state) => {
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
