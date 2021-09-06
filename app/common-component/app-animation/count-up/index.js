import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";

TweenOne.plugins.push(Children);

export default function CountUp({ value, floatLength, formatMoney }) {
  return (
    <TweenOne
      animation={{
        Children: {
          value: value,
          floatLength: floatLength,
          formatMoney: formatMoney,
        },
        duration: 1500,
      }}
    >
      0
    </TweenOne>
  );
}
