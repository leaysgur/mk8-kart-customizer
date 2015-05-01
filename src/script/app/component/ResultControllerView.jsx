define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const ResultControllerView = React.createClass({
        render() {
            return (
                <div>
                    <h1>カスタマイズ結果</h1>
                    {this.props.params.id}
                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return ResultControllerView;
});
