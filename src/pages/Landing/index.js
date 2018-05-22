/* @flow */

import loadable from 'loadable-components';
import { compose, pure } from 'recompose';

export default compose(pure)(loadable(() => import('pages/Landing/component')));
