/**
 * @license
 * Copyright a-Qoot All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/a-Qoot/qoot/blob/main/LICENSE
 */

import { AsyncProvider, Injector } from './types.js';

export function provideEventProp(parameterName: string): AsyncProvider<string> | null {
  return function eventPropProvider(injector: Injector): any {
    return injector.props[parameterName] || null;
  };
}