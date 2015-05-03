define([
    'react', 'react-router',
], (
    React,
    Router
) => {

    let { Link } = Router;

    const BtnView = React.createClass({
        propTypes: {
            label:     React.PropTypes.string.isRequired,
            to:        React.PropTypes.string,
            className: React.PropTypes.string,
            primary:   React.PropTypes.bool
        },
        render() {
            let className = this.props.className || '';
            className += ' cBtn';
            if (this.props.primary) { className += ' mPrimary'; }

            return (
                <Link className={className} to={this.props.to}>
                    <p className="label">{this.props.label}</p>
                </Link>
            );
        }
    });

    return BtnView;
});
