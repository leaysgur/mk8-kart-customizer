define([
    'react'
], (
    React
) => {

    const KartPartsListItemView = React.createClass({
        propTypes: {
            item: React.PropTypes.object.isRequired,
            onSelectItem: React.PropTypes.func.isRequired
        },
        _onClickItem() {
            this.props.onSelectItem(this.props.item);
        },
        render() {
            return (
                <li onClick={this._onClickItem}>
                    {this.props.item.name}
                </li>
            );
        }
    });

    return KartPartsListItemView;
});

