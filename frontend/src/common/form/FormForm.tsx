import React from 'react';

import Popup from "../popup/Popup";

interface IProps {
    onCancel: () => any;
    onSubmit: () => any;
    title: string;
}

class FormForm extends React.Component<IProps> {
    public onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit();
        }
    }

    public render() {
        return (
            <Popup>
                <div className={'popup-content flex-xc-yc'}>
                    <div className={'flex-dc form-page'}>
                        <h3 className={'form-title'}>{this.props.title}</h3>
                        <form onSubmit={this.onSubmit}>
                            {this.props.children}
                            <div className={'form-btn flex-xb-yc'}>
                                <input type={'button'}
                                       onClick={this.props.onCancel}
                                       className={'form-btn-it'}
                                       value={'取消'}/>
                                <input type={'submit'}
                                       className={'form-btn-it'}
                                       value={'提交'}/>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        );
    }
}

export default FormForm;