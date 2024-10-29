import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CategoryNameProps {
  name: string;
}

export default function CategoryName({ name }: CategoryNameProps) {
  return (
    <>
      <Typography
        variant="h4"
        component={"span"}
        sx={{ mr: 2, paddingLeft: "20px" }}
      >
        {name}
      </Typography>
      <ArrowForwardIosIcon
        sx={{ marginRight: "20px" }}
        fontSize="small"
      ></ArrowForwardIosIcon>
    </>
  );
}
