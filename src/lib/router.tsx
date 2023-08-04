import React, {
    FC,
    PropsWithChildren,
    createContext,
    useEffect,
    useMemo,
} from "react";

export type RouterInstance = {};

export type Router = {
    initialize(): void;
    remove(): void;
};

export const createRouter = () => {
    const matchPath = (path: string) =>
        window.location.hash.replace(/#/g, "") === path;
    const nodeListToArray = <T extends Node>(nodeList: NodeListOf<T>): T[] =>
        [].slice.call(nodeList);
    const getElements = (selector: string) =>
        nodeListToArray(document.querySelectorAll<HTMLElement>(selector));
    const getRoutes = () => getElements(".route");
    const getOnRouteActives = () => getElements(".get-active");
    const appendActive = (className: string) =>
        `${removeActive(className)} active`;
    const removeActive = (className: string) =>
        className.replace(/(^| )active($| )/g, " ").trim();
    const setActive = (es: HTMLElement[]) =>
        es.forEach(
            (e) =>
                (e.className = matchPath(e.getAttribute("data-path") ?? "")
                    ? appendActive(e.className)
                    : removeActive(e.className))
        );
    const onNavigate = () => {
        if (matchPath("") || routes.every((route) => !matchPath(route))) {
            window.location.hash = `#${entryRoute}`;
        }

        setActive(getRoutes().concat(getOnRouteActives()));
    };

    const routes = ["/introduction", "/contact"];

    const entryRoute = routes[0];

    return {
        initialize: () => {
            onNavigate();
            window.addEventListener("popstate", onNavigate);
        },
        remove: () => {
            window.removeEventListener("popstate", onNavigate);
        },
    };
};

export const RouterContext = createContext<RouterInstance | undefined>(
    undefined
);

export type RouterProps = PropsWithChildren<{
    router: Router;
}>;

export const Router: FC<RouterProps> = ({ children, router }) => {
    useEffect(() => {
        router.initialize();

        return () => router.remove();
    }, [router]);

    return (
        <RouterContext.Provider value={router}>
            {children}
        </RouterContext.Provider>
    );
};

export type RouterProviderProps = PropsWithChildren;

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
    const router = useMemo(() => createRouter(), []);

    return <Router router={router}>{children}</Router>;
};
