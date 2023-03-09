import React from "react";
import { Button, CircularProgress } from "@mui/material";
import "./NextButton.css";

function NextButton({ loading, step, disabled }) {
  return (
    <div className="buttonContainer">
      {loading ? (
        <CircularProgress color="secondary" sx={{ mt: 3 }} />
      ) : (
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ mt: 3 }}
          disabled={disabled}
          fullWidth
        >
          {step === 1 && <>DALEJ</>}
          {step === 2 && <>REJESTRUJ</>}
        </Button>
      )}
    </div>
  );
}

export default NextButton;
