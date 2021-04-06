import {RenderResult, render} from '@testing-library/react';
import * as React from 'react';

import NotFound from '@src/components/NotFound';

let documentBody: RenderResult;
describe('<NotFound />', () => {
    beforeEach(() => {
        documentBody = render(<NotFound />);
    });
    it('matches snapshot', () => {
        const {baseElement} = documentBody;
        expect(baseElement).toMatchSnapshot();
    });
});
