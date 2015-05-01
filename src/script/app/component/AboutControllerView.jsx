define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const AboutControllerView = React.createClass({
        render() {
            return (
                <div>
                    <h1>このサービスについて</h1>
                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return AboutControllerView;
});
