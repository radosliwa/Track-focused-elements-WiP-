import React, { useContext, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { TOption } from "../../types/types";

const textFieldStyle: Record<string, any> = {
    width: "215px",
    boxShadow: 1,
    "& label, & label.Mui-focused": {
        color: "secondary.main",
        borderColor: "secondary.main",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset, &.Mui-focused fieldset, &:hover fieldset": {
            borderColor: "secondary.main",
        },
        //hover
        "&:hover fieldset": { boxShadow: 4 },
        color: "secondary.main",
    },

};

interface IProps {
    label: string;
    value: string;
    defaultValue: string;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options: TOption[];
    styles?: null | Record<string, any>;
}
export { textFieldStyle }
export const SelectField = ({ label, value, defaultValue, onChangeHandler, options, styles = null }: IProps) => {
    return (
        <TextField
            label={label}
            sx={{ ...textFieldStyle, ...styles }}
            select
            fullWidth
            value={value}
            defaultValue={defaultValue}
            onChange={onChangeHandler}
        >
            {options.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}