define([
    'react', 'react-router',
    'common/component/AppLayout', 'common/component/ErrorLayout',
    'app/component/TopLayout', 'app/component/AboutLayout',
    'app/component/CustomLayout', 'app/component/ResultLayout'
], (
    React,
    Router,
    AppLayout,
    ErrorLayout,
    TopLayout,
    AboutLayout,
    CustomLayout,
    ResultLayout
) => {

    let { Route, DefaultRoute, NotFoundRoute } = Router;

    let Routes = (
        <Route path="/" handler={AppLayout}>
            <DefaultRoute handler={TopLayout} />

            <Route name="about"  handler={AboutLayout} />
            <Route name="custom" handler={CustomLayout}>
                <Route path=":id" />
            </Route>
            <Route name="result" handler={ResultLayout}>
                <Route path=":id" />
            </Route>

            <NotFoundRoute handler={ErrorLayout} />
        </Route>
    );

    return Routes;
});
