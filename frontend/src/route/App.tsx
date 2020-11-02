import React from 'react';
import '../assets/css/common/index.css';
import '../assets/css/common/reset.css';
import '../assets/css/common/common.css';
import '../assets/css/common/table.css';
import '../assets/css/menu.css';
import '../assets/css/table/list.css';
import '../assets/css/table/page.css';
import '../assets/css/table/button.css';
import '../assets/css/page.css';
import '../assets/css/popup/popup.css';
import '../assets/css/popup/form.css';
import '../assets/css/popup/form-it.css';
import '../assets/css/message/loading.css';
import '../assets/css/message/toast.css';
import '../assets/css/message/dialog.css';

import {
    BrowserRouter as Router,
} from "react-router-dom";


import MessageLoadingUnique from "../common/message/MessageLoadingUnique";
import MessageDialogUnique from "../common/message/MessageDialogUnique";
import MessageToastUnique from "../common/message/MessageToastUnique";
import Menu from "./Menu";
import Routes from "./Routes";

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className={'flex'}>
                    <Menu/>
                    <main className={'page'}>
                        <Routes/>
                    </main>
                </div>
                <MessageDialogUnique/>
                <MessageToastUnique/>
                <MessageLoadingUnique/>
            </Router>
        );
    }
}


export default App;