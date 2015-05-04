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
            primary:   React.PropTypes.bool,
            custom:    React.PropTypes.bool
        },
        render() {
            let className = 'cBtn';
            if (this.props.primary) { className += ' mPrimary'; }

            if (this.props.custom) {
                return (
                    <a className={className} href={this.props.to} target="_blank">
                        <p className="label">{this.props.label}</p>
                    </a>
                );
            } else {
                return (
                    <Link className={className} to={this.props.to}>
                        <p className="label">{this.props.label}</p>
                    </Link>
                );
            }
        }
    });

    return BtnView;
});
