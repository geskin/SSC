import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Paper,
} from "@mui/material";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subscribe: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    const textFieldStyles = {
        "& .MuiInputBase-input": {
            color: "#0B2C40",
            backgroundColor: "#F7F4EF",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0B2C40",
        },
    };

    return (
        <Paper
            elevation={3}
            sx={{
                width: {
                    xs: "100%", // mobile full width
                    sm: "70%",  // tablet
                    md: "50%",  // desktop
                },
                p: 2,
                backgroundColor: "#0B2C40",
                color: "#DDAA4F",
            }}
        >
            {/* <Typography variant="h6" gutterBottom>
                Contact Us
            </Typography> */}

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={textFieldStyles}
                />

                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    sx={textFieldStyles}
                />

                <TextField
                    label="Message"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={1}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            padding: 0,
                        },
                        "& .MuiOutlinedInput-input": {
                            padding: 0,
                            color: "#0B2C40",
                            backgroundColor: "#F7F4EF",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#0B2C40",
                        },
                    }}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            sx={{
                                color: "#DDAA4F",
                                "&.Mui-checked": { color: "#DDAA4F" },
                            }}
                        />
                    }
                    label="Sign up for our email list for updates"
                    sx={{ color: "#F7F4EF" }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#DDAA4F",
                        "&:hover": { backgroundColor: "#DDAA4F" },
                        width: {
                            xs: "100%",
                            sm: "70%",
                            md: "50%",
                        },
                        alignSelf: "center",
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Paper>
    );
};

export default ContactForm;

