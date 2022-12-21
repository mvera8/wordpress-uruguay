import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WordpressUruguay } from './WordpressUruguay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<BrowserRouter>
			<WordpressUruguay />
		</BrowserRouter>
  </React.StrictMode>,
)
