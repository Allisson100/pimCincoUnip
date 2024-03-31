import { v4 as uuidv4 } from "uuid";
import { FaTools } from "react-icons/fa"; // ferramentas
import { GiAbstract042 } from "react-icons/gi"; // quadrado
import { GiAcorn } from "react-icons/gi"; //noz
import { GiAnchor } from "react-icons/gi"; //âncora
import { GiAnvil } from "react-icons/gi"; // bigorna
import { GiBarracksTent } from "react-icons/gi"; // cabana
import { GiBatteryPack } from "react-icons/gi"; // bateria
import { GiBigWave } from "react-icons/gi"; //onda

const addEquipmentsIcons = [
  {
    id: uuidv4(),
    name: "tools",
    icon: FaTools,
  },
  {
    id: uuidv4(),
    name: "square",
    icon: GiAbstract042,
  },
  {
    id: uuidv4(),
    name: "nut",
    icon: GiAcorn,
  },
  {
    id: uuidv4(),
    name: "anchor",
    icon: GiAnchor,
  },
  {
    id: uuidv4(),
    name: "anvil",
    icon: GiAnvil,
  },
  {
    id: uuidv4(),
    name: "tent",
    icon: GiBarracksTent,
  },
  {
    id: uuidv4(),
    name: "battery",
    icon: GiBatteryPack,
  },
  {
    id: uuidv4(),
    name: "wave",
    icon: GiBigWave,
  },
];

export default addEquipmentsIcons;
