import React from 'react'
import ReactDom from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'
import {Provider} from './context/context'

import App from "./App"
import './index.css'


ReactDom.render(
    <SpeechProvider appId="4a03afef-de0e-411d-b853-d75e476e5080" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider> ,
    document.getElementById('root')
);
