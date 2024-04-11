/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/vue" />

// manual extension of route types
declare module 'vue-router/auto-routes' {
  import type { RouteRecordInfo, ParamValue, ParamValueOneOrMore, ParamValueZeroOrMore, ParamValueZeroOrOne } from 'unplugin-vue-router';

  export interface RouteNamedMap {
    'custom-dynamic-name': RouteRecordInfo<
      'custom-dynamic-name',
      '/added-during-runtime/[...path]',
      { path: ParamValue<true> },
      { path: ParamValue<false> }
    >;
  }
}
