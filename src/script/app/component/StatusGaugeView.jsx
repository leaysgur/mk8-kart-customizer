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

            let maxValArr = __getEmptyArr(this.props.maxVal);
            let baseWidth = (100/this.props.maxVal).toFixed(2);

            let gaugeStyle = {
                width: `${baseWidth * this.props.val}%`
            };
            let delimiterStyle = {
                width: `${baseWidth}%`
            };

            return (
                <div className={className}>
                    <div className="label">{this.props.label}</div>
                    <div className="gaugeWrap" data-val={this.props.val}>
                        <div className="gauge" style={gaugeStyle}></div>
                        {maxValArr.map((i) => {return (
                        <span key={i} className="delimiter" style={delimiterStyle}></span>
                        );})}
                    </div>
                </div>
            );
        }
    });

    return StatusGaugeView;

    function __getEmptyArr(len) {
        let i = 0, l = len;
        let retArr = [];
        for (; i < l; i++) { retArr[retArr.length] = i; }
        return retArr;
    }
});
