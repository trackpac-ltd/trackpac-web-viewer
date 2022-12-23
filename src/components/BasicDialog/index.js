import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// show a dialog with a title, message, and actions

export default function BasicDialog(props) {
  const { open, title, message, actions } = props;

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions &&
          actions.map((action, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  window.location.href = action.onclick;
                }}
                variant={action.variant}
                color={action.color}
              >
                {action.text}
              </Button>
            );
          })}
      </DialogActions>
    </Dialog>
  );
}
