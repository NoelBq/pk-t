
import { render } from '@testing-library/react';
import { LoadingWrapper } from './LoadingWrapper';

describe('<LoadingWrapper />', () => {
    it('renders without crashing', () => {
        render(
            <LoadingWrapper>
                <div>Test child</div>
            </LoadingWrapper>
        );
    });
});
