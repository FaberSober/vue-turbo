declare namespace FaRouter {
  import type { RouteNamedMap } from "vue-router/auto-routes";

  type RouteNamedMap = RouteNamedMap;

  /**
   * route key
   */
  type RouteKey = keyof RouteNamedMap;

  /**
   * route path
   */
  type RoutePath = RouteNamedMap[RouteKey];

}
