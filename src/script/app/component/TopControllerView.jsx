define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const TopControllerView = React.createClass({
        render() {
            return (
                <section className="l-content-wrap">
                    <h1>MarioKart8 Kart Customizer Img!</h1>
                    <Link to="custom">はじめる</Link>
                    <Link to="about">このサービスについて</Link>
                </section>
            );
        }
    });

    return TopControllerView;
});
