import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

import { Static } from 'components/static';

export const Routes = (
    <div>
        <Route exact path="/" component={Static} />
    </div>
);
