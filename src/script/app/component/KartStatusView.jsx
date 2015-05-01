define([
    'react'
], (
    React
) => {

    const KartStatusView = React.createClass({
        PropTypes: {
            selectedDriver: React.PropTypes.object.isRequired,
            selectedBody: React.PropTypes.object.isRequired,
            selectedTire: React.PropTypes.object.isRequired,
            selectedGlider: React.PropTypes.object.isRequired
        },
        render() {
            let {
                id,
                name,
                speed,
                acceleration,
                weight,
                handling,
                traction,
                miniTurbo
            } = this.props.selectedDriver;

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
                        <li>{id}: {name}</li>
                        <li>選択したボディ</li>
                        <li>選択したタイヤ</li>
                        <li>選択したグライダー</li>
                    </ul>
                </div>
            );
        }
    });

    return KartStatusView;
});
