import { ReactComponent as VoiceFishingIcon } from "./Icons/VoiceFishingIcon.svg";
import { ReactComponent as SmishingIcon } from "./Icons/SmishingIcon.svg";
import { ReactComponent as AccountIcon } from "./Icons/AccountIcon.svg";
import { ReactComponent as RealestateIcon } from "./Icons/RealEstateIcon.svg";
import { ReactComponent as UsedItemIcon } from "./Icons/UsedItemIcon.svg";
const IconList = [
  {
    name: "보이스피싱",
    icon: <VoiceFishingIcon />,
  },
  {
    name: "스미싱",
    icon: <SmishingIcon />,
  },
  {
    name: "계좌사기",
    icon: <AccountIcon />,
  },
  {
    name: "부동산사기",
    icon: <RealestateIcon />,
  },
  {
    name: "중고거래사기",
    icon: <UsedItemIcon />,
  },
];
export default IconList;
