define([
    'react'
], (
    React
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

            return (
                <div>
                    <ul>
                        <li>はやさ: {speed.ground}</li>
                        <li>はやさ(地上): {speed.ground}</li>
                        <li>はやさ(水中): {speed.water}</li>
                        <li>はやさ(空中): {speed.air}</li>
                        <li>はやさ(反重力): {speed.antiGravity}</li>
                        <li>かそく: {acceleration}</li>
                        <li>おもさ: {weight}</li>
                        <li>まがりやすさ: {handling.ground}</li>
                        <li>まがりやすさ(地上): {handling.ground}</li>
                        <li>まがりやすさ(水中): {handling.water}</li>
                        <li>まがりやすさ(空中): {handling.air}</li>
                        <li>まがりやすさ(反重力): {handling.antiGravity}</li>
                        <li>すべりにくさ: {traction}</li>
                        <li>ミニターボ: {miniTurbo}</li>
                    </ul>
                    <ul>
                        <li>{driverId}: {driverName}</li>
                        <li>{bodyId}: {bodyName}</li>
                        <li>{tireId}: {tireName}</li>
                        <li>{gliderId}: {gliderName}</li>
                    </ul>
                </div>
            );
        }
    });

    return KartStatusView;
});
