import * as React from "react";
import { Form, FormikProvider, useFormik, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LuBookPlus } from "react-icons/lu";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function Label({ message, changeColor = false }) {
  const content = (
    <span>
      <strong
        style={{
          color: changeColor && "red",
        }}
      >
        {message}
      </strong>
    </span>
  );

  return content;
}

const ReserveEquipment = () => {
  const equipments = useSelector((state) => state.equipments);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é necessário"),
    equipment: Yup.string().required("Equipamento é necessário"),
    date: Yup.string().required("Data é necessária"),
    timeStart: Yup.string().required("Hora de início é necessário"),
    timeEnd: Yup.string().required("Hora final é necessário"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      equipment: "",
      date: "",
      timeStart: "",
      timeEnd: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);

      resetForm();
    },
  });

  const { values, errors, touched, getFieldProps, setFieldValue } = formik;

  return (
    <FormikProvider value={formik}>
      <Form
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: "90vh",
            border: "3px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              marginBottom: "1rem",
              color:
                Boolean(touched.name && errors.name) ||
                Boolean(touched.equipment && errors.equipment) ||
                Boolean(touched.date && errors.date) ||
                Boolean(touched.timeStart && errors.timeStart) ||
                Boolean(touched.timeEnd && errors.timeEnd)
                  ? "red"
                  : "none",
            }}
          >
            Preencha todos os campos
          </h3>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              {...getFieldProps("name")}
              error={Boolean(touched.name && errors.name)}
              helperText=""
              label="Digite seu nome"
            />
          </Box>

          <FormControl
            fullWidth
            sx={{
              marginTop: "1rem",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              error={Boolean(touched.equipment && errors.equipment)}
            >
              Equipamentos
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipamentos"
              value={values.equipment}
              {...getFieldProps("equipment")}
              onChange={(event) => {
                setFieldValue("equipment", event.target.value);
              }}
              error={Boolean(touched.equipment && errors.equipment)}
            >
              {equipments?.map((equipment) => (
                <MenuItem key={equipment.id} value={equipment.name}>
                  {equipment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box
            sx={{
              width: "100%",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker", "TimePicker", "DateTimePicker"]}
              >
                <DemoItem
                  label={
                    <Label
                      message="Escolha uma data para a reserva:"
                      changeColor={Boolean(touched.date && errors.date)}
                    />
                  }
                  sx={{
                    marginTop: "0",
                    color: "red",
                  }}
                >
                  <DatePicker
                    value={
                      values.date ? dayjs(values.date, "DD-MM-YYYY") : null
                    }
                    onChange={(date) => {
                      setFieldValue(
                        "date",
                        date ? date.format("DD-MM-YYYY") : null
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    format="DD/MM/YYYY"
                    error={Boolean(touched.date && errors.date)}
                  />
                </DemoItem>

                <DemoItem
                  label={
                    <Label
                      message="Digite a hora de início da reserva:"
                      changeColor={Boolean(
                        touched.timeStart && errors.timeStart
                      )}
                    />
                  }
                  sx={{
                    marginTop: "0.5rem",
                  }}
                >
                  <TimePicker
                    ampm={false}
                    views={["hours", "minutes"]}
                    disableOpenPicker
                    value={values.timeStart ? dayjs(values.timeStart) : null}
                    onChange={(time) => {
                      setFieldValue(
                        "timeStart",
                        time ? dayjs(time.format()).format("HH:mm") : null
                      );
                    }}
                  />
                </DemoItem>
                <DemoItem
                  label={
                    <Label
                      message="Digite a hora final da reserva:"
                      changeColor={Boolean(touched.timeEnd && errors.timeEnd)}
                    />
                  }
                  sx={{
                    marginTop: "0.5rem",
                  }}
                >
                  <TimePicker
                    ampm={false}
                    views={["hours", "minutes"]}
                    disableOpenPicker
                    value={values.timeEnd ? dayjs(values.timeEnd) : null}
                    onChange={(time) => {
                      setFieldValue(
                        "timeEnd",
                        time ? dayjs(time.format()).format("HH:mm") : null
                      );
                    }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Button
            variant="contained"
            endIcon={<LuBookPlus />}
            type="submit"
            sx={{
              marginTop: "1rem",
            }}
          >
            Reservar
          </Button>
        </Box>

        <Box
          sx={{
            width: "45%",
            height: "90vh",
            border: "3px solid black",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <h3>Reservados</h3>
        </Box>
      </Form>
    </FormikProvider>
  );
};
export default ReserveEquipment;
