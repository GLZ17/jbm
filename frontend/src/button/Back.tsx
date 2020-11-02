import React from 'react';

interface IProps {
    onCancel?: () => any;
}

class Back extends React.Component<IProps> {
    public onClick = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    public render() {
        return (
            <div className={'flex-xc-yc'}>
                <span onClick={this.onClick}
                    className={'button button-back'}>返回</span>
            </div>
        );
    }
}

export default Back;