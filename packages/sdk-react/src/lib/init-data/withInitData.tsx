import React, {ComponentType} from 'react';

import {useInitData} from './useInitData';
import {InitData} from './types';

/**
 * HOC which passes InitData SDK component to wrapped React component.
 * @param Component - component to wrap.
 */
export function withInitData<P extends {initData?: InitData}>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, 'initData'>> {
  return function WithInitData(props: Omit<P, 'initData'>) {
    const p = {...props, initData: useInitData()} as P;

    return <Component {...p}/>;
  };
}
