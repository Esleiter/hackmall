import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Grid, Chip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const PreferenceForm = ({preferents}) => {
  
  const [option, setOption] = useState([]);

  useEffect(() => {
    setOption(preferents);
  }, []);

  const handleClick = (optionId) => {
    const newOptions = option.filter((preferent) => preferent.id != optionId);
    setOption(newOptions);
  }
  
  const handleDelete = () => {};

  const cardStyles = {
    maxWidth: 900, // Ancho máximo de la tarjeta
    minHeight: 200, // Altura mínima de la tarjeta
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const chipStyles = {
    fontSize: '16px', // Tamaño de fuente
    padding: '18px', // Relleno interno
    backgroundColor: '#fff',
    border: '1px solid #f44336',
    color: '#f44336'
  };

  return (
    <Box>
      <Card style={cardStyles}>
        <CardContent>
          <Grid container gap={4}>
            {option &&
              option.map((preferent) => (
                <Chip
                  key={preferent.id}
                  label={preferent.name}
                  onClick={() => handleClick(preferent.id)}
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
