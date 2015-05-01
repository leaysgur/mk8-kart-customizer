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
                <div>
                    <div>エラー！</div>
                    <Link to="/">Top</Link>へ
                </div>
            );
        }
    });

    return ErrorControllerView;
});
