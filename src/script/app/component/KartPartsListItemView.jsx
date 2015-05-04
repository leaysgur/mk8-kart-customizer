define([
    'react'
], (
    React
) => {

    const KartPartsListItemView = React.createClass({
        propTypes: {
            item: React.PropTypes.object.isRequired,
            // TODO: Const
            type: React.PropTypes.oneOf(['body', 'tire', 'glider']),
            onSelectItem: React.PropTypes.func.isRequired
        },
        _onClickItem() {
            this.props.onSelectItem(this.props.item);
        },
        render() {
            return (
                <li className="cKartPartsListItem" onClick={this._onClickItem}>
                    <img className="img" src={`dist/image/${this.props.type}/${this.props.item.id}.png`} alt={this.props.item.name} />
                </li>
            );
        }
    });

    return KartPartsListItemView;
});

