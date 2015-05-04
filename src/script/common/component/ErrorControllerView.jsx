define([
    'react',
    'app/component/BtnView'
], (
    React,
    BtnView
) => {

    const ErrorControllerView = React.createClass({
        render() {
            return (
                <section className="lContentWrap cContentWrap">
                    <h1 className="cHeading mLv1">エラー</h1>
                    <p>
                        URLが間違っているか、お使いの環境で非対応のコードがあったか、何はともあれエラーが発生したようです。
                    </p>
                    <p>
                        趣味プロダクトで大した検証してないので、ごめんなさいとしか言えません！
                    </p>

                    <BtnView to="/" label="トップへ" />
                </section>
            );
        }
    });

    return ErrorControllerView;
});
