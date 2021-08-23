import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";

TweenOne.plugins.push(Children);

export default function CountUp({ value, floatLength, scroll }) {
  return scroll ? (
    <OverPack>
      <TweenOne
        animation={{
          Children: {
            value: value,
            floatLength: floatLength,
            formatMoney: 1000,
          },
          duration: 1000,
        }}
      >
        0
      </TweenOne>
    </OverPack>
  ) : (
    <TweenOne
      animation={{
        Children: {
          value: value,
          floatLength: floatLength,
          formatMoney: 1000,
        },
        duration: 1000,
      }}
    >
      0
    </TweenOne>
  );
}
