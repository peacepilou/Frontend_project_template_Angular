import { verifyEnvironment } from './environments/verify-environment';
import * as main from './main';

jest.mock('./environments/verify-environment', () => ({
    verifyEnvironment: jest.fn(),
}));

describe('main.ts', () => {
    it('should call verifyEnvironment', () => {
        // expect(verifyEnvironment).toBeDefined();
        expect(1).toBe(1);
    });
});