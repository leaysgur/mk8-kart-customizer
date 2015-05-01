require([
    'react', 'react-router',
    'app/Routes',
    'app/data/DriverData', 'app/model/DriverModel',
    'app/data/BodyData', 'app/model/BodyModel',
    'app/data/TireData', 'app/model/TireModel',
    'app/data/GliderData', 'app/model/GliderModel'
], (
    React,
    Router,
    AppRoutes,
    DriverData,
    DriverModel,
    BodyData,
    BodyModel,
    TireData,
    TireModel,
    GliderData,
    GliderModel
) => {

    class Main {
        constructor() {
            DriverModel.init(DriverData);
            BodyModel.init(BodyData);
            TireModel.init(TireData);
            GliderModel.init(GliderData);

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
