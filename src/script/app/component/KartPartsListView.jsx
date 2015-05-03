define([
    'react',
    'app/component/KartPartsListItemView'
], (
    React,
    KartPartsListItemView
) => {

    const KartPartsListView = React.createClass({
        propTypes: {
            itemList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
            // TODO: Const
            type: React.PropTypes.oneOf(['body', 'tire', 'glider']),
            onSelectItem: React.PropTypes.func.isRequired
        },
        _onSelectItem(item) {
            this.props.onSelectItem(this.props.type, item);
        },
        render() {
            return (
                <ul>
                    {this.props.itemList.map((item) => {return (
                    <KartPartsListItemView type={this.props.type} item={item} onSelectItem={this._onSelectItem} key={item.id} />
                    );})}
                </ul>
            );
        }
    });

    return KartPartsListView;
});
