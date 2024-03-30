import { useSelector } from "react-redux";
import EquipmentCard from "../../components/EquipmentCard";
import { Box } from "@mui/material";
import Menu from "../../components/Menu";

const ShowEquipaments = () => {
  const equipments = useSelector((state) => state.equipments);

  return (
    <div>
      <Menu />
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
    </div>
  );
};

export default ShowEquipaments;
