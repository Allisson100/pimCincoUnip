import { reserveEquipment, removeReserve } from "../store/reducers/equipments";
import { v4 as uuidv4 } from "uuid";
import getNewTime from "../utils/getNewTime";

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

  verifyReserve(allEquipments) {
    const { equipmentId, date, timeStart, timeEnd } = this;

    const getEquipment = allEquipments.find(
      (equipment) => equipment.id === equipmentId
    );

    const transformTimeStart = getNewTime(timeStart);
    const transformTimeEnd = getNewTime(timeEnd);

    const hasOverlap = getEquipment?.reserve.some((item) => {
      if (item.date === date) {
        if (
          (transformTimeStart >= item.timeStart &&
            transformTimeStart < item.timeEnd) ||
          (transformTimeEnd > item.timeStart &&
            transformTimeEnd <= item.timeEnd) ||
          (transformTimeStart <= item.timeStart &&
            transformTimeEnd >= item.timeEnd)
        ) {
          return true;
        }
      }
      return false;
    });

    return !hasOverlap;
  }
}

export { ReservationManager };
