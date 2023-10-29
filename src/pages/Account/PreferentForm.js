import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Chip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const PreferenceForm = () => {
  const [preferents, setPreferents] = useState([
    {
      name: "Cine",
      id: 1,
    },
    {
      name: "Deporte",
      id: 2,
    },
    {
      name: "Música",
      id: 3,
    },
    {
      name: "Tecnología",
      id: 4,
    },
    {
      name: "Videojuegos",
      id: 5,
    }
  ]);

  const handleClick = () => {};
  
  const handleDelete = () => {};

  const cardStyles = {
    maxWidth: 600, // Ancho máximo de la tarjeta
    minHeight: 200, // Altura mínima de la tarjeta
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const chipStyles = {
    fontSize: '16px', // Tamaño de fuente
    padding: '12px 18px', // Relleno interno
  };

  return (
    <Box>
      <Card style={cardStyles}>
        <CardContent>
          <Grid container gap={4}>
            {preferents &&
              preferents.map((preferent) => (
                <Chip
                  key={preferent.id}
                  label={preferent.name}
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                  style={chipStyles}
                />
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PreferenceForm;
