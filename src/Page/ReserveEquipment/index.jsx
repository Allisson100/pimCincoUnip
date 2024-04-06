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
  Typography,
  Modal,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LuBookPlus } from "react-icons/lu";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { ReservationManager } from "../../classes/reserve";
import { FaCalendarCheck } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

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
  const [opnModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const dispatch = useDispatch();
  const equipments = useSelector((state) => state.equipments);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é necessário"),
    equipmentId: Yup.string().required("Equipamento é necessário"),
    date: Yup.string().required("Data é necessária"),
    timeStart: Yup.string().required("Hora de início é necessário"),
    timeEnd: Yup.string().required("Hora final é necessário"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      equipmentId: "",
      date: "",
      timeStart: "",
      timeEnd: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, equipmentId, date, timeStart, timeEnd } = values;

      const createReserve = new ReservationManager(
        name,
        equipmentId,
        date,
        timeStart,
        timeEnd
      );
      createReserve.reserveEquipment(dispatch);

      resetForm();
    },
  });

  const { values, errors, touched, getFieldProps, setFieldValue } = formik;
  const allReserveExist = equipments.some(
    (equipment) => equipment.reserve.length > 0
  );

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
            minHeight: "100vh",
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
                Boolean(touched.equipmentId && errors.equipmentId) ||
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
              error={Boolean(touched.equipmentId && errors.equipmentId)}
            >
              Equipamentos
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Equipamentos"
              value={values.equipmentId}
              {...getFieldProps("equipmentId")}
              onChange={(event) => {
                setFieldValue("equipmentId", event.target.value);
              }}
              error={Boolean(touched.equipmentId && errors.equipmentId)}
            >
              {equipments?.map((equipment) => (
                <MenuItem key={equipment.id} value={equipment.id}>
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
            height: "100vh",
            border: "3px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3>Reservados</h3>
          <Box
            sx={{
              width: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {equipments?.map((equipment) => {
              const reserveExist = equipment.reserve.length > 0;

              return (
                reserveExist && (
                  <Box key={equipment.id}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box>{<equipment.icon size={40} />}</Box>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {equipment.name}
                      </Typography>
                    </Box>
                    <Box>
                      {equipment?.reserve?.map((item) => (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            padding: "0.5rem",
                          }}
                        >
                          <FaCalendarCheck
                            size={15}
                            style={{
                              marginLeft: "1rem",
                            }}
                          />
                          <Box sx={{ fontSize: "0.9rem" }}>
                            {`${item.name} - ${item.date.replace(/-/g, "/")}: ${
                              item.timeStart
                            } às ${item.timeEnd}`}
                          </Box>
                          <IoCloseCircle
                            size={15}
                            color="red"
                            cursor="pointer"
                            onClick={handleOpen}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )
              );
            })}
          </Box>
          {!allReserveExist && (
            <Typography>Nenhum equipamento reservado</Typography>
          )}
        </Box>

        <Modal
          open={opnModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50%",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "1rem",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              Digite a senha para remover o agendamento
            </Typography>
            {/* Criar o ID para cada objeto para saber qual agendademento excluir */}
            {/* Fazer um esquema na seção de Adicionar equipamento apra removê-los tbm */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Erro se senha estiver incorreta
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Input para digitar senha
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              botão confirmar
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              botão voltar
            </Typography>
          </Box>
        </Modal>
      </Form>
    </FormikProvider>
  );
};
export default ReserveEquipment;
