define([
    'react',
    'app/component/BtnView'
], (
    React,
    BtnView
) => {

    const AboutControllerView = React.createClass({
        render() {
            return (
                <section className="lContentWrap cContentWrap">
                    <h1 className="cHeading mLv1">このサービスについて</h1>
                    <p>ほげほげ</p>
                    <h2 className="cHeading mLv2">あれこれ</h2>
                    <p>ほげほげ</p>

                    <hr className="cSpacer" />

                    <BtnView to="/" label="トップへ" />
                </section>
            );
        }
    });

    return AboutControllerView;
});
