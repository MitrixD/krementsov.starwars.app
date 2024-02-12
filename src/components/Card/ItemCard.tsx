import { FC, memo } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type TProps = {
  imageUrl: string;
  linkTo: string;
  title: string;
};

const ItemCard: FC<TProps> = memo((props) => {
  const { title, imageUrl, linkTo } = props;

  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          loading={"lazy"}
          component="img"
          sx={{ width: "100%", height: "auto" }}
          image={imageUrl}
          alt={title || 'Image title'}
        />
        <CardContent
          sx={{
            paddingX: "1rem",
            paddingY: "1rem !important",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" textAlign={"center"}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
});

export default ItemCard;
