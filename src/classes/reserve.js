import { reserveEquipment } from "../store/reducers/equipments";

class ReservationManager {
  constructor(name, equipmentId, date, timeStart, timeEnd) {
    this.name = name;
    this.equipmentId = equipmentId;
    this.date = date;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
  }

  reserveEquipment(dispatch) {
    const { name, equipmentId, date, timeStart, timeEnd } = this;
    const newReserve = { name, equipmentId, date, timeStart, timeEnd };
    dispatch(reserveEquipment(newReserve));
  }
}

export { ReservationManager };
