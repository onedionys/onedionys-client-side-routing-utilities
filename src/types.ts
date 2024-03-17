export type RouteHandler = () => void;

export interface RouteParams {
    [key: string]: string;
}
