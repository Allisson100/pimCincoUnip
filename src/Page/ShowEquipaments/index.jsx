import { useSelector } from "react-redux";
import EquipmentCard from "../../components/EquipmentCard";
import { Box } from "@mui/material";

const ShowEquipaments = () => {
  const equipments = useSelector((state) => state.equipments);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      component="section"
      gap="1rem"
      flexWrap="wrap"
    >
      {equipments.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment} />
      ))}
    </Box>
  );
};

export default ShowEquipaments;
