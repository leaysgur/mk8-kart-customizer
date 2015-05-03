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

            let gaugeStyle = {
                width: `${((this.props.val/this.props.maxVal)*100).toFixed(2)}%`
            };
            let outerStyle = {
                width: `${(100/this.props.maxVal).toFixed(2)}%`
            };

            return (
                <div className={className}>
                    <div className="label">{this.props.label}</div>
                    <div className="gaugeWrap" data-val={this.props.val}>
                        <div className="gauge" style={gaugeStyle}></div>
                        {maxValArr.map(() => {return (
                        <span className="delimiter" style={outerStyle}></span>
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
        for (; i < l; i++) { retArr[retArr.length] = 1; }
        return retArr;
    }
});
