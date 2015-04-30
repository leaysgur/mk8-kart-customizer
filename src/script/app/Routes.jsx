define([
    'react', 'react-router',
    'common/component/AppLayout', 'common/component/ErrorLayout',
    'app/component/TopLayout', 'app/component/AboutLayout',
    'app/component/CustomDriverLayout', 'app/component/CustomKartLayout',
    'app/component/ResultLayout'
], (
    React,
    Router,
    AppLayout,
    ErrorLayout,
    TopLayout,
    AboutLayout,
    CustomDriverLayout,
    CustomKartLayout,
    ResultLayout
) => {

    let { Route, DefaultRoute, NotFoundRoute } = Router;

    const Routes = (
        <Route path="/" handler={AppLayout}>
            <DefaultRoute handler={TopLayout} />

            <Route name="about"  handler={AboutLayout} />

            <Route name="custom">
                <DefaultRoute handler={CustomDriverLayout} />
                <Route path=":id" handler={CustomKartLayout} />
            </Route>

            <Route name="result" handler={ResultLayout}>
                <Route path=":id" />
            </Route>

            <NotFoundRoute handler={ErrorLayout} />
        </Route>
    );

    return Routes;
});
