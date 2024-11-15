import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// eslint-disable-next-line no-restricted-imports
import {
  fireEvent,
  render,
  renderHook,
  RenderOptions,
  waitFor,
} from '@testing-library/react-native';
import { act } from 'react';

export const queryClientCache = new QueryCache();

export const jestQueryClient = new QueryClient({
  queryCache: queryClientCache,
  defaultOptions: {
    queries: {
      gcTime: 0,
      retry: false,
    },
  },
});

type WrapperProps = {
  children?: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <QueryClientProvider client={jestQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

const customRenderHook = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  initialProps?: TProps,
) => {
  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
  };

  return renderHook(hook, {
    wrapper,
    initialProps: initialProps as TProps & { children?: React.ReactNode },
  });
};

export type RenderRTLOptions = {
  renderOptions?: RenderOptions;
};

const customRender = (ui: React.ReactElement, options?: RenderRTLOptions) => {
  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
  };

  return render(ui, { wrapper, ...options?.renderOptions });
};

export { act, fireEvent, waitFor };
export { customRender as render };
export { customRenderHook as renderHook };
