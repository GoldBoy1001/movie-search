import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


interface SearchResultProps {
  searchResults: Array<{ id: number; name: string }>;
}

export default function SearchList({ searchResults }: SearchResultProps) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {searchResults.map((result) => (
        <ListItem key={result.id}>
          <ListItemText primary={result.name} />
        </ListItem>
      ))}
    </List>
  );
}
