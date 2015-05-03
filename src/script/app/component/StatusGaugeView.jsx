define([
    'react'
], (
    React
) => {

    const StatusGaugeView = React.createClass({
        propTypes: {
            val:       React.PropTypes.number.isRequired,
            maxVal:    React.PropTypes.number.isRequired,
            label:     React.PropTypes.string,
            className: React.PropTypes.string
        },
        render() {
            let className = this.props.className || '';
            className += ' cStatusGauge';

            return (
                <div className={className}>
                    <div className="label">{this.props.label}</div>
                    <div className="outer">
                        {this.props.val} / {this.props.maxVal}
                    </div>
                </div>
            );
        }
    });

    return StatusGaugeView;
});
