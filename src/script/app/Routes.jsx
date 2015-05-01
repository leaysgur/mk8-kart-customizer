define([
    'react', 'react-router',
    'common/component/AppControllerView', 'common/component/ErrorControllerView',
    'app/component/TopControllerView', 'app/component/AboutControllerView',
    'app/component/CustomDriverControllerView', 'app/component/CustomKartControllerView',
    'app/component/ResultControllerView'
], (
    React,
    Router,
    AppControllerView,
    ErrorControllerView,
    TopControllerView,
    AboutControllerView,
    CustomDriverControllerView,
    CustomKartControllerView,
    ResultControllerView
) => {

    let { Route, DefaultRoute, NotFoundRoute } = Router;

    const Routes = (
        <Route path="/" handler={AppControllerView}>
            <DefaultRoute handler={TopControllerView} />

            <Route name="about"  handler={AboutControllerView} />

            <Route name="custom">
                <DefaultRoute handler={CustomDriverControllerView} />
                <Route path=":id" handler={CustomKartControllerView} />
            </Route>

            <Route name="result" handler={ResultControllerView}>
                <Route path=":customizeId" />
            </Route>

            <NotFoundRoute handler={ErrorControllerView} />
        </Route>
    );

    return Routes;
});
