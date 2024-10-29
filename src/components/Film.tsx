import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

interface FilmProps {
  poster: string;
  rate: number;
  bg: string;
  color: string;
}

export default function Film({ poster, rate, bg, color }: FilmProps) {
  return (
    <>
      <Card
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="517"
            image={poster}
            alt="green iguana"
          />
        </CardActionArea>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "44px",
            height: "28px",
            backgroundColor: bg,
            fontWeight: "600",
            padding: "0px 5px",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            color: color,
          }}
        >
          {rate}
        </div>
      </Card>
    </>
  );
}
