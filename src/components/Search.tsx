import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import { useState } from "react";
interface SearchProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: Array<{
    id: number;
    name: string;
    poster: {
      url: string;
    };
    internalRating?: number;
    year: number;
  }>;
}

export default function Search({
  value,
  handleChange,
  searchResults,
}: SearchProps) {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Поиск"
        variant="standard"
        sx={{
          width: "100%",
          mb: "50px",
        }}
        value={value}
        onChange={handleChange}
      />
      {searchResults.length > 0 && (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {searchResults.map((result) => (
            <ListItem key={result.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={result.poster.url} />
              </ListItemAvatar>
              <ListItemText
                primary={result.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline", mr: 2, color: "#00B956" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {result.internalRating || 0}
                    </Typography>
                    {result.year}
                  </React.Fragment>
                }
              />
            </ListItem>
            // <ListItem key={result.id}>
            //   <ListItemText primary={result.name} />
            // </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
