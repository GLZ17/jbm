import React from 'react';

import MessageDialog from "./MessageDialog";


interface IState {
    show: boolean;
    callback?: () => any;
    message: string;
}

class MessageDialogUnique extends React.Component<{}, IState> {
    private static instance ?: MessageDialogUnique;
    public static alert = (message: string, callback: () => any) => {
        if (MessageDialogUnique.instance) {
            MessageDialogUnique.instance.setState({
                show: true,
                message,
                callback
            });
        }
    }

    public constructor(props: {}) {
        super(props);
        this.state = {show: false, message: ''};
        MessageDialogUnique.instance = this;
    }

    public componentWillUnmount() {
        if (MessageDialogUnique.instance === this) {
            MessageDialogUnique.instance = undefined;
        }
    }

    public onCancelClick = () => {
        this.setState({show: false});
    }
    public onConfirmClick = () => {
        this.onCancelClick();
        if (this.state.callback) {
            this.state.callback();
        }
    }

    public render() {
        return this.state.show
            && (<MessageDialog message={this.state.message}
                               onCancelClick={this.onCancelClick}
                               onConfirmClick={this.onConfirmClick}/>)
    }
}

export default MessageDialogUnique;