import React from "react";
import {
  Button,
  CircularProgress,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./NextButton.css";

function NextButton({ loading, readOnly, disabled, handleBack, apiError }) {
  return (
    <div className="buttonContainer">
      {loading ? (
        apiError ? (
          <>
            <Typography color="#f44236" variant="h6">
              Wystąpił błąd, spróbuj ponownie później
            </Typography>
            <Button
              color="black"
              variant="outlined"
              onClick={handleBack}
              size="large"
              sx={{ mt: 2 }}
            >
              Powrót
            </Button>
          </>
        ) : (
          <CircularProgress color="primary" />
        )
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 3,
          }}
        >
          {readOnly && (
            <IconButton color="black" onClick={handleBack}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            disabled={disabled}
            size="large"
          >
            {readOnly ? <>Rejestruj</> : <>Przejdź do podsumowania</>}
          </Button>
        </Box>
      )}
    </div>
  );
}

export default NextButton;
