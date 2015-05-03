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
                <section className="lContentWrap">
                    <h1 className="cMainImg">
                        <img className="img" src="dist/image/main.png" alt="MarioKart8 Kart Customizer" />
                    </h1>
                    <Link to="custom">はじめる</Link>
                    <Link to="about">このサービスについて</Link>
                </section>
            );
        }
    });

    return TopControllerView;
});
