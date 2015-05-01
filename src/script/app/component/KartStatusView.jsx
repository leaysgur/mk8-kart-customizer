define([
    'react'
], (
    React
) => {

    const KartStatusView = React.createClass({
        render() {
            return (
                <div>
                    <ul>
                        <li>はやさ</li>
                        <li>かそく</li>
                        <li>おもさ</li>
                        <li>まがりやすさ</li>
                        <li>すべりにくさ</li>
                        <li>ミニターボ</li>
                    </ul>
                    <ul>
                        <li>選択したドライバー</li>
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
