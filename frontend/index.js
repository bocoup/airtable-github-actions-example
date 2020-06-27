import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldBlock() {
    return <div>Hello GitHub Actions - Release V2</div>;
}

initializeBlock(() => <HelloWorldBlock />);
