import * as React from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Label({ message }) {
  const content = (
    <span>
      <strong>{message}</strong>
    </span>
  );

  return content;
}

const ReserveEquipment = () => {
  const [equipment, setEquipment] = useState("");

  const handleChange = (event) => {
    setEquipment(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "45%",
          height: "80vh",
          border: "3px solid black",
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            // {...getFieldProps("name")}
            // error={Boolean(touched.name && errors.name)}
            label="Digite seu nome"
            helperText=""
          />
        </Box>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Equipamentos</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={equipment}
            label="Equipamentos"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
                label={<Label message="Escolha uma data para a reserva:" />}
                sx={{
                  marginTop: "0",
                }}
              >
                <DatePicker />
              </DemoItem>

              <DemoItem
                label={<Label message="Digite a hora de início da reserva:" />}
                sx={{
                  marginTop: "0.5rem",
                }}
              >
                <TimePicker
                  ampm={false}
                  views={["hours", "minutes"]}
                  disableOpenPicker
                />
              </DemoItem>
              <DemoItem
                label={<Label message="Digite a hora final da reserva:" />}
                sx={{
                  marginTop: "0.5rem",
                }}
              >
                <TimePicker
                  ampm={false}
                  views={["hours", "minutes"]}
                  disableOpenPicker
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>

      <Box
        sx={{
          width: "45%",
          height: "80vh",
          border: "3px solid black",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <h3>Reservados</h3>
      </Box>
    </Box>
  );
};
export default ReserveEquipment;
