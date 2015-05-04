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
                    <p>
                        祝・まさかの200cc実装！
                    </p>
                    <p>
                        久しぶりにやるしかない！って思ったけど、
                        カスタマイズまったく覚えてない・・ってそこのあなた！
                    </p>
                    <p>
                        そんなあなたのために、WiiUを起動しなくてもカスタマイズを考えられるサービスを作りました。
                    </p>

                    <h2 className="cHeading mLv2">表示されるデータ</h2>
                    <p>
                        第二弾のDLC(2015/04/23)まで網羅してあるので、今の時点で可能なカスタマイズは全てカバーされてるはずです。
                        データが間違ってる・・に関しては、見つけたらこっそり教えてください！
                    </p>

                    <h2 className="cHeading mLv2">技術的な話</h2>
                    <p>
                        今流行のReactを使ってみたいってだけのモチベーションで作りました。
                        なんやかんや感想はまた<a href="http://lealog.hateblo.jp/" target="_blank">ブログ</a>に書こうと思います。
                    </p>
                    <p>
                        という適当な感じなので、間違った使い方とかもっとこうしたほうが・・というのもあるかと思います。
                        <a href="https://github.com/leader22/mk8-kart-customizer" target="_blank">Github</a>にソースコードは全部置いてあるので、IssueなりP/Rなり頂ければ幸いです。
                        その他なにかあれば<a href="https://twitter.com/leader22">Twitter</a>まで！
                    </p>

                    <hr className="cSpacer" />

                    <BtnView to="/" label="トップへ" />
                </section>
            );
        }
    });

    return AboutControllerView;
});
