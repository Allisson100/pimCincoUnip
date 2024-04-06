import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Typography, Modal } from "@mui/material";

const ModalApp = ({ openModal, handleClose, handleRemoveReserve }) => {
  const ValidationSchema = Yup.object().shape({
    password: Yup.string().test(
      "password",
      "Senha incorreta",
      (value) => value === "12345"
    ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleRemoveReserve();
      resetForm();
      handleClose();
    },
  });

  const { values, errors, touched, getFieldProps } = formik;

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormikProvider value={formik}>
        <Form>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
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

            {/* Fazer um esquema na seção de Adicionar equipamento apra removê-los tbm */}
            <Box
              sx={{
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                {...getFieldProps("password")}
                error={Boolean(errors.password)}
                label="Digite a senha para cancelar a reserva"
              />
            </Box>
            {errors.password && (
              <Box
                sx={{
                  color: "red",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {errors.password}
              </Box>
            )}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#1aff00",
                  width: "30%",
                }}
              >
                Confirmar
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  width: "30%",
                }}
                onClick={handleClose}
              >
                Voltar
              </Button>
            </Box>
          </Box>
        </Form>
      </FormikProvider>
    </Modal>
  );
};

export default ModalApp;
