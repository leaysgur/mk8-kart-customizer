define([
    'react'
], (
    React
) => {

    const KartStatusView = React.createClass({
        PropTypes: {
            selectedDriver: React.PropTypes.object.isRequired
        },
        render() {
            let {
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
                        <li>はやさ: {speed}</li>
                        <li>かそく: {acceleration}</li>
                        <li>おもさ: {weight}</li>
                        <li>まがりやすさ: {handling}</li>
                        <li>すべりにくさ: {traction}</li>
                        <li>ミニターボ: {miniTurbo}</li>
                    </ul>
                    <ul>
                        <li>{name}</li>
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
