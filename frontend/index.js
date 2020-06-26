import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldBlock() {
    return <div>Hello GitHub Actions</div>;
}

initializeBlock(() => <HelloWorldBlock />);
