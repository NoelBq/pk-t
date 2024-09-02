"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, Typography, Box } from "@mui/material";

interface Props {
    name: string;
    id: string | undefined;
}

export function CardItem({ name, id }: Props) {
    const [imageError, setImageError] = useState(false);
    const [fallbackError, setFallbackError] = useState(false);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const fallbackImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const notFoundImageUrl = `/not-found.jpg`;

    return (
        <Card
            style={{
                background: "linear-gradient(135deg, #fce16e, #f9b233)",
                border: "2px solid #f0a22b",
                borderRadius: "8px",
                padding: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{
                    fontWeight: "bold",
                    marginBottom: "4px",
                    fontSize: "1.25rem",
                    letterSpacing: "0px",
                }}
            >
                {name}
            </Typography>
            <Box
                style={{
                    position: "relative",
                    height: "180px",
                    background: "linear-gradient(135deg, #f9d26b, #f0a22b)",
                    borderRadius: "6px",
                    border: "1px solid #f0a22b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Image
                    onError={() => {
                        if (!imageError) {
                            setImageError(true);
                        } else if (!fallbackError) {
                            setFallbackError(true);
                        }
                    }}
                    src={fallbackError ? notFoundImageUrl : (imageError ? fallbackImageUrl : imageUrl)}
                    alt={name}
                    fill={true}
                    style={{ borderRadius: "6px" }}
                />
            </Box>
        </Card>
    )
}

