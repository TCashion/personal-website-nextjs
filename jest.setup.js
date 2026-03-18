require('@testing-library/jest-dom');

jest.mock('plaiceholder', () => ({
  getPlaiceholder: jest.fn(),
}));
