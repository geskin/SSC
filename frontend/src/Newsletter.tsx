import React from "react";
import "./Newsletter.css";
import InputSubscription from "./utils/InputSubscription";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface NewsletterModalProps {
    onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Card
                sx={{
                    position: "relative",
                    borderRadius: 3,
                    width: "90%",
                    maxWidth: 400,
                    boxShadow: 8,
                }}
            >
                {/* Close button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: "grey.500",
                        "&:hover": { color: "grey.800" },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{ fontWeight: "bold", color: "#800020", mb: 1 }}
                    >
                        Join Our Newsletter
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                        Get notified when we're launching!
                    </Typography>

                    {/* Keep your existing subscription component */}
                    <InputSubscription />
                </CardContent>
            </Card>
        </div>
    );
}
