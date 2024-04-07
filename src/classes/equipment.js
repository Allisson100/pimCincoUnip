import { v4 as uuidv4 } from "uuid";
import { addEquipment } from "../store/reducers/equipments";

class Equipment {
  constructor(name, icon) {
    this.id = uuidv4();
    this.name = name;
    this.icon = icon;
    this.reserve = [];
  }

  showDetails() {
    alert(`Id: ${this.id}\nEquipamento: ${this.name}`);
  }
}

class CategoryEquipment extends Equipment {
  constructor(name, icon, category) {
    super(name, icon);
    this.category = category;
  }

  create(dispatch) {
    const { id, name, icon, category, reserve } = this;
    const newEquipment = { id, name, icon, category, reserve };
    dispatch(addEquipment(newEquipment));
  }

  showDetails() {
    alert(
      `Id: ${this.id}\nEquipamento: ${this.name}\nCategoria: ${this.category}`
    );
  }
}

export { Equipment, CategoryEquipment };
