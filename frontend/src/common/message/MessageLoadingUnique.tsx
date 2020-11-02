import React from 'react';

import MessageLoading from "./MessageLoading";

interface IState {
    show: boolean;
}

class MessageLoadingUnique extends React.Component<{}, IState> {
    private static instance?: MessageLoadingUnique;
    private static setShow = (show: boolean) => {
        if (MessageLoadingUnique.instance) {
            MessageLoadingUnique.instance.setState({show});
        }
    };
    public static start = () => MessageLoadingUnique.setShow(true);

    public static stop = () => MessageLoadingUnique.setShow(false);

    public constructor(props: {}) {
        super(props);
        this.state = {show: false};
        MessageLoadingUnique.instance = this;
    }

    public componentWillUnmount() {
        if (MessageLoadingUnique.instance === this) {
            MessageLoadingUnique.instance = undefined;
        }
    }

    public render() {
        return this.state.show && <MessageLoading />
    }
}

export default MessageLoadingUnique;