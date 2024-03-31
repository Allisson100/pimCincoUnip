import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import {
  TextField,
  Grid,
  Button,
  Box,
  useTheme,
  Checkbox,
  Typography,
} from "@mui/material";
import Title from "../../components/Title";
import { IoMdAddCircleOutline } from "react-icons/io";
import addEquipmentsIcons from "../../assets/addEquipmentsIcons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryEquipment } from "../../classes/equipment";

const AddEquipment = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const equipments = useSelector((state) => state.equipments);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é necessário"),
    iconId: Yup.string().required("Ícone é necessário"),
    category: Yup.string().required("Cateogria é necessária"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      iconId: "",
      category: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, iconId, category } = values;
      const { icon } = addEquipmentsIcons.find((icon) => icon.id === iconId);

      const newEquipment = new CategoryEquipment(name, icon, category);
      newEquipment.showDetails();
      newEquipment.create(dispatch);

      setSelectedIcon("");
      resetForm();
    },
  });

  const { errors, touched, getFieldProps } = formik;
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (iconId) => {
    setSelectedIcon(iconId);
    formik.setFieldValue("iconId", iconId);
  };

  return (
    <FormikProvider value={formik}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          marginTop: "4rem",
        }}
      >
        {((touched.name && errors.name) ||
          (touched.iconId && errors.iconId) ||
          (touched.category && errors.category)) && (
          <Box>
            <Typography color="red">
              Por favor digite um nome, uma categoria e selecione um ícone.
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              label="Nome do Equipamento"
              helperText=""
              sx={{
                // Cor da borda
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid white",
                },
                // Adicione estilos ao hover
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                // Cor do Label
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                // Quando esta com erro
                "& .MuiFormLabel-root.Mui-error": {
                  color: "#d32f2f",
                },
                // Oq eu escrevo
                "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              {...getFieldProps("category")}
              error={Boolean(touched.category && errors.category)}
              label="Nome da Categoria do Equipamento"
              helperText=""
              sx={{
                // Cor da borda
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid white",
                },
                // Adicione estilos ao hover
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                // Cor do Label
                "& .MuiFormLabel-root": {
                  color: "white",
                },
                // Quando esta com erro
                "& .MuiFormLabel-root.Mui-error": {
                  color: "#d32f2f",
                },
                // Oq eu escrevo
                "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
            />
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              width: "50%",
            }}
          >
            <>
              {addEquipmentsIcons.map((icon) => (
                <Grid
                  key={icon.id}
                  item
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={selectedIcon === icon.id}
                    onChange={() => handleIconSelect(icon.id)}
                    sx={{
                      color: touched.iconId && errors.iconId ? "red" : "white",
                    }}
                  />
                  <icon.icon size={60} color={theme.dark.colors.defaultMain} />
                </Grid>
              ))}
            </>
          </Grid>

          <Box
            sx={{
              width: "20%",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              endIcon={<IoMdAddCircleOutline size={30} />}
              sx={{
                backgroundColor: theme.dark.colors.palette.blue.five,
                width: "100%",
                fontSize: "1.3rem",
              }}
            >
              Adicionar
            </Button>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default AddEquipment;
