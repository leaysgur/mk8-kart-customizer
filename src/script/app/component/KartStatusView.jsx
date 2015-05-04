define([
    'react',
    'app/component/StatusGaugeView'
], (
    React,
    StatusGaugeView
) => {

    const KartStatusView = React.createClass({
        PropTypes: {
            selectedDriver: React.PropTypes.object.isRequired,
            selectedBody:   React.PropTypes.object.isRequired,
            selectedTire:   React.PropTypes.object.isRequired,
            selectedGlider: React.PropTypes.object.isRequired
        },
        _getSumUpPropByKeyAndType(key, type) {
            let numArr;
            if (type) {
                numArr = [
                    this.props.selectedDriver[key][type],
                    this.props.selectedBody[key][type],
                    this.props.selectedTire[key][type],
                    this.props.selectedGlider[key][type]
                ];
            } else {
                numArr = [
                    this.props.selectedDriver[key],
                    this.props.selectedBody[key],
                    this.props.selectedTire[key],
                    this.props.selectedGlider[key]
                ];
            }

            return numArr.reduce((a, b) => { return parseFloat(a) + parseFloat(b); });
        },
        getInitialState() {
            return {
                showSummary: true
            };
        },
        _toggleSummary() {
            this.setState({
                showSummary: !this.state.showSummary
            });
        },
        render() {
            let driverId     = this.props.selectedDriver.id,
                driverName   = this.props.selectedDriver.name,
                bodyId       = this.props.selectedBody.id,
                bodyName     = this.props.selectedBody.name,
                tireId       = this.props.selectedTire.id,
                tireName     = this.props.selectedTire.name,
                gliderId     = this.props.selectedGlider.id,
                gliderName   = this.props.selectedGlider.name,
                speed        = {
                    summary:     this._getSumUpPropByKeyAndType('speed', 'ground'),
                    ground:      this._getSumUpPropByKeyAndType('speed', 'ground'),
                    water:       this._getSumUpPropByKeyAndType('speed', 'water'),
                    air:         this._getSumUpPropByKeyAndType('speed', 'air'),
                    antiGravity: this._getSumUpPropByKeyAndType('speed', 'antiGravity')
                },
                acceleration = this._getSumUpPropByKeyAndType('acceleration', null)|0,
                weight       = this._getSumUpPropByKeyAndType('weight', null)|0,
                handling     = {
                    summary:     this._getSumUpPropByKeyAndType('handling', 'ground'),
                    ground:      this._getSumUpPropByKeyAndType('handling', 'ground'),
                    water:       this._getSumUpPropByKeyAndType('handling', 'water'),
                    air:         this._getSumUpPropByKeyAndType('handling', 'air'),
                    antiGravity: this._getSumUpPropByKeyAndType('handling', 'antiGravity')
                },
                traction     = this._getSumUpPropByKeyAndType('traction', null),
                miniTurbo    = this._getSumUpPropByKeyAndType('miniTurbo', null);

            let summaryClassName = (this.state.showSummary) ? '' : 'isHidden';
            let detailClassName  = (this.state.showSummary) ? 'isHidden' : '';

            return (
                <div className="cKartStatus">
                    <ul className="cColumn">
                        <li className="cColumnItem mCount2">
                            <StatusGaugeView label="スピード"         val={speed.ground}      maxVal={6} className={summaryClassName} />
                            <StatusGaugeView label="スピード(地上)"   val={speed.ground}      maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="スピード(水中)"   val={speed.water}       maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="スピード(空中)"   val={speed.air}         maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="スピード(反重力)" val={speed.antiGravity} maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="かそく"           val={acceleration}      maxVal={6} />
                            <StatusGaugeView label="おもさ"           val={weight}            maxVal={6} />
                        </li>
                        <li className="cColumnItem mCount2">
                            <StatusGaugeView label="まがりやすさ"         val={handling.ground}      maxVal={6} className={summaryClassName} />
                            <StatusGaugeView label="まがりやすさ(地上)"   val={handling.ground}      maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="まがりやすさ(水中)"   val={handling.water}       maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="まがりやすさ(空中)"   val={handling.air}         maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="まがりやすさ(反重力)" val={handling.antiGravity} maxVal={6} className={detailClassName} />
                            <StatusGaugeView label="すべりにくさ"         val={traction}             maxVal={6} />
                            <StatusGaugeView label="ミニターボ"           val={miniTurbo}            maxVal={6} />
                        </li>
                    </ul>

                    <a className="linkToggleSummary" onClick={this._toggleSummary}>{this.state.showSummary ? '詳細' : '簡易' }表示</a>

                    { (bodyId && tireId && gliderId) ?
                    <ul className="cColumn">
                        <li className="cColumnItem mCount4">
                            <div className="cSelectedItem">
                                <img className="img" src={`dist/image/driver/${driverId}.png`} alt={driverName} />
                                <div className="name">{driverName}</div>
                            </div>
                        </li>
                        <li className="cColumnItem mCount4">
                            <div className="cSelectedItem">
                                <img className="img" src={`dist/image/body/${bodyId}.png`} alt={bodyName} />
                                <div className="name">{bodyName}</div>
                            </div>
                        </li>
                        <li className="cColumnItem mCount4">
                            <div className="cSelectedItem">
                                <img className="img" src={`dist/image/tire/${tireId}.png`} alt={tireName} />
                                <div className="name">{tireName}</div>
                            </div>
                        </li>
                        <li className="cColumnItem mCount4">
                            <div className="cSelectedItem">
                                <img className="img" src={`dist/image/glider/${gliderId}.png`} alt={gliderName} />
                                <div className="name">{gliderName}</div>
                            </div>
                        </li>
                    </ul>
                    : '' }
                </div>
            );
        }
    });

    return KartStatusView;
});
