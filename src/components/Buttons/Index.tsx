import React, { FC, useState } from "react";
import { Button } from "@mui/material";

const Buttons: FC<InterfaceButton> = ({title, type, onClick, variant, color, size}) => {

    return (
        <Button sx={{
            textTransform: 'capitalize',
            fontFamily: 'roboto',
            fontWeight: 500,
            boxShadow: 0,
            ":hover": {
                boxShadow: 0
            },
        }}
          type={type} onClick={onClick} variant={variant} color={color} size={size}>
            {title}
        </Button>
    );
}

export default Buttons;