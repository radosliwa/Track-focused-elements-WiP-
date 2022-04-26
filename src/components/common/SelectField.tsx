import React, { useContext, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TOption } from "../../types/types";

const textFieldStyle = {
    width: "215px",
    boxShadow: 2,
    "& label, & label.Mui-focused": {
        color: "secondary.main",
        borderColor: "secondary.main",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset, &.Mui-focused fieldset": {
            borderColor: "secondary.main",
        },
        color: "secondary.main",
    },
};

interface IProps {
    error?: boolean;
    label: string;
    value: string;
    handleClickAway: () => void;
    defaultValue: string;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    options: TOption[];
    styles?: null | Record<string, any>;
}

export const SelectField = ({ error, label, value, handleClickAway, defaultValue, onChangeHandler, options, styles = null }: IProps) => {
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <TextField
                label={label}
                sx={{ ...textFieldStyle, ...styles }}
                select
                fullWidth
                error={error}
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
        </ClickAwayListener>
    );
}