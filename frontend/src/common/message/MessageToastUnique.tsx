import React from 'react';
import MessageToast, {
    IToastItem,
    IToastProps
} from "./MessageToast";


interface IMessage {
    status: boolean;
    message: string;
}


class MessageToastUnique extends React.Component<{}, IToastProps> {
    private static instance ?: MessageToastUnique;
    private static readonly keepLiveTime = 5000;
    public static message = (result: IMessage) => {
        const {status, message} = result;
        if (status) {
            MessageToastUnique.success(message)
        } else {
            MessageToastUnique.error(message);
        }
    }
    public static success = (message: string) => {
        MessageToastUnique.append(message, true, false);
    }
    public static error = (message: string) => {
        MessageToastUnique.append(message, false, true);
    }
    private static append = (message: string, success: boolean, error: boolean) => {
        if (MessageToastUnique.instance) {
            const id = `${Date.now().toString()}-${Math.random()}`;
            MessageToastUnique
                .instance
                .state.list.push({id, message, success, error});
            MessageToastUnique.update(MessageToastUnique.instance.state.list);
            setTimeout(() => {
                if (MessageToastUnique.instance) {
                    MessageToastUnique.update(MessageToastUnique.instance.state.list.filter(it => it.id !== id));
                }
            }, MessageToastUnique.keepLiveTime);
        }
    }
    private static update = (list: IToastItem[]) => {
        if (MessageToastUnique.instance) {
            MessageToastUnique.instance.setState({list});
        }
    }

    public constructor(props: {}) {
        super(props);
        this.state = {list: []};
        MessageToastUnique.instance = this;
    }

    public componentWillUnmount() {
        if (MessageToastUnique.instance === this) {
            MessageToastUnique.instance = undefined;
        }
    }

    public render() {
        return this.state.list.length > 0
            && (<MessageToast list={this.state.list}/>);
    }
}

export default MessageToastUnique;