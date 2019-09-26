export const initialize = () => {
  const matchPath = (path: string) =>
    window.location.hash.replace(/#/g, '') === path
  ;

  const nodeListToArray = <T extends Node>(nodeList: NodeListOf<T>): T[] =>
    [].slice.call(nodeList)
  ;

  const getElements = (selector: string) =>
    nodeListToArray(document.querySelectorAll<HTMLElement>(selector))
  ;

  const getRoutes = () =>
    getElements('.route')
  ;

  const getOnRouteActives = () =>
    getElements('.get-active')
  ;

  const appendActive = (className: string) =>
    `${removeActive(className)} active`
  ;

  const removeActive = (className: string) =>
    className.replace(/(^| )active($| )/g, ' ').trim()
  ;

  const setActive = (es: HTMLElement[]) =>
    es.forEach(e =>
      e.className = matchPath(e.getAttribute('data-path'))
      ? appendActive(e.className)
      : removeActive(e.className)
    )
  ;

  const onNavigate = () => {
    if (
      matchPath('') ||
      routes.every(route => !matchPath(route))
    ) {
      window.location.hash = `#${entryRoute}`;
    }

    setActive(getRoutes().concat(getOnRouteActives()))
  };

  const routes = [
    '/introduction',
    '/contact',
  ];

  const entryRoute = routes[0];

  onNavigate();

  window.addEventListener('popstate', onNavigate);
};

(window as any).___initialize___ = initialize;
