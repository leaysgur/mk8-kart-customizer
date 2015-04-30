define([
    'react', 'react-router',
    'common/component/App',
    'app/component/Top',
    'app/component/Input'
], (
    React,
    Router,
    App,
    Top,
    Input
) => {

    let { Route, DefaultRoute } = Router;

    let Routes = (
        <Route name="app" path="/" handler={App}>
            <DefaultRoute handler={Top} />
            <Route name="input" handler={Input} />
        </Route>
    );

    return Routes;
});
