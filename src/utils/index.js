export function isActiveRoute(routes) {
  const currentRoute = window.location.pathname;
  return routes.includes(currentRoute);
}
