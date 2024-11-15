import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/queryClient';
import { HomeScreen } from './screens/Home';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}

export default App;
