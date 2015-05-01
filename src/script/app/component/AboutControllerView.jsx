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
                <section>
                    <h1>このサービスについて</h1>
                    <p>ほげほげ</p>

                    <Link to="/">トップへ</Link>
                </section>
            );
        }
    });

    return AboutControllerView;
});
