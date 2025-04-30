import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import {Provider} from 'react-redux';
import store from './stores/store';

//it provides to use redux tools, every parts into project
//store is just reducers

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
    <Provider store={store}>
        <App/>
    </Provider> 
</>
);