import ReactDOM from 'react-dom';

// Import ReactJs components

//import App from '../components/imageApp.jsx';

//import App from '../components/convertAppV1.jsx';
import App from '../components/convertAppV2.jsx';


/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => ReactDOM.render(
            <App />,
            document.getElementById('insertReactHere')
        );


window.addEventListener('DOMContentLoaded', bootstrapReact );
