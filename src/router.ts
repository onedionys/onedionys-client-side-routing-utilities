import { RouteHandler, RouteParams } from './types';

export class Router {
    private routes: Map<string, RouteHandler>;

    constructor() {
        this.routes = new Map();
        window.addEventListener('hashchange', this.route.bind(this));
    }

    addRoute(path: string, handler: RouteHandler): void {
        this.routes.set(path, handler);
    }

    route(): void {
        const path = window.location.hash.substring(1);
        const handler = this.routes.get(path);
        if (handler) {
            handler();
        } else {
            console.error('Route not found');
        }
    }

    navigate(path: string): void {
        window.location.hash = path;
    }

    getParams(): RouteParams {
        // Logic to parse route parameters from URL
    }
}
