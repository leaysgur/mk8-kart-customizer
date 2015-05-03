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


    const TopControllerView = React.createClass({
        render() {
            return (
                <section className="lContentWrap">
                    <h1 className="cMainImg">
                        <img className="img" src="dist/image/main.png" alt="MarioKart8 Kart Customizer" />
                    </h1>

                    <BtnView className="lTopBtn" label="はじめる" to="custom" primary />
                    <BtnView label="このサービスについて" to="about" />
                </section>
            );
        }
    });

    return TopControllerView;
});
