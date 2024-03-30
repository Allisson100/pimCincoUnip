import { v4 as uuidv4 } from "uuid";
import { GiFilmProjector } from "react-icons/gi"; // projetor
import { PiProjectorScreenBold } from "react-icons/pi"; // tela de projeção
import { GiMaterialsScience } from "react-icons/gi"; // Material de ciencia
import { FcDvdLogo } from "react-icons/fc"; // DVD
import { GrPersonalComputer } from "react-icons/gr"; //Notebook
import { AiTwotoneAudio } from "react-icons/ai"; // Microfone
import { GiSoundOn } from "react-icons/gi"; // Caixa de som
import { PiTelevisionBold } from "react-icons/pi"; // Televisão

const icons = [
  {
    id: uuidv4(),
    name: "projector",
    icon: GiFilmProjector,
  },
  {
    id: uuidv4(),
    name: "projectorScreen",
    icon: PiProjectorScreenBold,
  },
  {
    id: uuidv4(),
    name: "materialScience",
    icon: GiMaterialsScience,
  },
  {
    id: uuidv4(),
    name: "dvd",
    icon: FcDvdLogo,
  },
  {
    id: uuidv4(),
    name: "notebook",
    icon: GrPersonalComputer,
  },
  {
    id: uuidv4(),
    name: "microphone",
    icon: AiTwotoneAudio,
  },
  {
    id: uuidv4(),
    name: "soundBox",
    icon: GiSoundOn,
  },
  {
    id: uuidv4(),
    name: "television",
    icon: PiTelevisionBold,
  },
];

export default icons;
