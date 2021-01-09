import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    if (module.hot) {
        module.hot.accept();
    }

    return <div>Hi There</div>
}

ReactDOM.render(<App/>, document.getElementById('root'))
