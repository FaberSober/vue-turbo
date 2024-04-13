import { useSvgIconRender } from '@fa/hooks';
import { FaSvgIcon } from '@fa/ui';

export function useSvgIcon() {
  const { SvgIconVNode } = useSvgIconRender(FaSvgIcon);

  return {
    SvgIconVNode,
  };
}
