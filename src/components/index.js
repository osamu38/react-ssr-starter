import loadable from 'loadable-components';

export default {
  Button: loadable(() => import('components/Button')),
  Container: loadable(() => import('components/Container')),
  Error: loadable(() => import('components/Error')),
  Footer: loadable(() => import('components/Footer')),
  Header: loadable(() => import('components/Header')),
  Input: loadable(() => import('components/Input')),
  Label: loadable(() => import('components/Label')),
  LoginForm: loadable(() => import('components/LoginForm')),
  Logo: loadable(() => import('components/Logo')),
  Main: loadable(() => import('components/Main')),
  Menu: loadable(() => import('components/Menu')),
  MenuIcon: loadable(() => import('components/MenuIcon')),
  OctIcon: loadable(() => import('components/OctIcon')),
  StackList: loadable(() => import('components/StackList')),
  SubTitle: loadable(() => import('components/SubTitle')),
  Title: loadable(() => import('components/Title')),
  User: loadable(() => import('components/User')),
  UserList: loadable(() => import('components/UserList')),
};
