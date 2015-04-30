define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    let Top = React.createClass({
        render() {
            return (
                <div>
                    <h1>トップページ</h1>
                    <hr />
                    なんやかんや
                    <hr />
                    <Link to="input">Input</Link>へ
                </div>
            );
        }
    });

    return Top;
});
