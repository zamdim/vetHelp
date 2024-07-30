import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppWrapper from './AppWrapper';

const root = createRoot(document.getElementById('root'));

root.render(<AppWrapper />);
