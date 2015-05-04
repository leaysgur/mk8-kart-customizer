define([
    'react',
    'app/component/BtnView'
], (
    React,
    BtnView
) => {

    const TopControllerView = React.createClass({
        render() {
            return (
                <section className="lContentWrap">
                    <h1 className="cMainImg">
                        <img className="img" src="dist/image/main.png" alt="MarioKart8 Kart Customizer" />
                    </h1>

                    <hr className="cSpacer" />

                    <BtnView label="はじめる" to="custom" primary />
                    <BtnView label="このサービスについて" to="about" />
                </section>
            );
        }
    });

    return TopControllerView;
});
