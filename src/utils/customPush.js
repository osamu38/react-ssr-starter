import { parse } from 'query-string';
import pathToRegexp from 'path-to-regexp';
import { endpoint } from 'config/url';
import routes from 'routes';
import { isJSON } from 'utils/helpers';

function loadComponent(route) {
  if (route && route.component && route.component.load) {
    return route.component.load();
  }
  return Promise.resolve({ default: { loadData: null } });
}
function getPageName(href) {
  return Object.keys(endpoint).find((key) =>
    pathToRegexp(endpoint[key]).test(href)
  );
}
function getParams(targetEndpoint, href) {
  const re = pathToRegexp(targetEndpoint);
  const endpointInfo = re.exec(href) || [];
  const keys = [];

  pathToRegexp(targetEndpoint, keys);

  return keys.reduce(
    (pre, cur, index) => ({
      [cur.name]: isJSON(endpointInfo[index + 1])
        ? JSON.parse(endpointInfo[index + 1])
        : endpointInfo[index + 1],
    }),
    {}
  );
}

async function customPush(href, push, dispatch, state) {
  const query = href.includes('?')
    ? parse(href, { arrayFormat: 'bracket' })
    : {};
  const pageName = getPageName(href);
  const targetEndpoint = pageName ? endpoint[pageName] : '';
  const route = routes.find((item) => item.path === targetEndpoint);
  const params = getParams(targetEndpoint, href);
  const loadedComponent = await loadComponent(route);
  const { loadData } = loadedComponent.default;

  if (loadData) {
    await loadData({ dispatch, state, params, query, route });
  }
  push(href);
}

export default customPush;
