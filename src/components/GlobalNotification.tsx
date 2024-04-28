import { useState } from "react";
import { Collapse, Alert, IconButton, AlertTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type SeverityTypes = "success" | "error" | "info" | "warning";
export type VariantTypes = "filled" | "outlined" | "standard";

export interface IGlobalNotificationProps {
  message: string;
  title?: string;
  severity: SeverityTypes;
  canClose: boolean;
  variant?: VariantTypes;
}

export const GlobalNotification = (props: IGlobalNotificationProps) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {props.message && (
        <Collapse in={open}>
          <Alert
            variant={props.variant || "standard"}
            severity={props.severity}
            action={
              props.canClose && (
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              )
            }
            sx={{ mb: 2 }}
          >
            {props.title && <AlertTitle>{props.title}</AlertTitle>}
            {props.message}
          </Alert>
        </Collapse>
      )}
    </>
  );
};
