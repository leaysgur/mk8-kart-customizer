define([
    'react', 'react-router'
], (
    React,
    Router
) => {

    let { Link } = Router;

    const ErrorControllerView = React.createClass({
        render() {
            return (
                <section>
                    <h1>エラー</h1>
                    <p>
                        URLが間違っているか、非対応の環境で閲覧したか、何はともあれエラーが発生したようです
                    </p>

                    <Link to="/">トップへ</Link>
                </section>
            );
        }
    });

    return ErrorControllerView;
});
