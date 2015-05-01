define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const CustomControllerView = React.createClass({
        render() {
            return (
                <div>
                    <h1>カートパーツ選択</h1>
                    {this.props.params.id}
                    <hr />
                    <Link to="/">トップへ</Link>
                </div>
            );
        }
    });

    return CustomControllerView;
});
