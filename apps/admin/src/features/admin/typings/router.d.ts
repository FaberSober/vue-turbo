declare namespace FaRouter {
  import type { RouteNamedMap } from "vue-router/auto-routes";

  /**
   * route key
   */
  type RouteKey = keyof RouteNamedMap;

  /**
   * route path
   */
  type RoutePath = RouteNamedMap[RouteKey];

}
