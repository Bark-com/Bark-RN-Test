import '@testing-library/react-native/extend-expect';

import mockRNAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-async-storage/async-storage', () => ({
  ...mockRNAsyncStorage,
  getItem: (key: string) => {
    if (key === 'app-install-time') {
      return Promise.resolve('installTime');
    }
    return Promise.resolve();
  },
}));
