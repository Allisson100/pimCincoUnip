import { reserveEquipment, removeReserve } from "../store/reducers/equipments";
import { v4 as uuidv4 } from "uuid";

class ReservationManager {
  constructor(name, equipmentId, date, timeStart, timeEnd) {
    this.id = uuidv4();
    this.name = name;
    this.equipmentId = equipmentId;
    this.date = date;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
  }

  reserveEquipment(dispatch) {
    const { id, name, equipmentId, date, timeStart, timeEnd } = this;
    const newReserve = { id, name, equipmentId, date, timeStart, timeEnd };
    dispatch(reserveEquipment(newReserve));
  }

  removeReserve(equipmentId, reserveId, dispatch) {
    const itemToRemove = { equipmentId, reserveId };
    dispatch(removeReserve(itemToRemove));
  }
}

export { ReservationManager };
