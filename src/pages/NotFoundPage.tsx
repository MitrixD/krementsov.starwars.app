import { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";

const NotFoundPage: FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Stack textAlign="center">
        <Typography variant="h3">404 - Not Found</Typography>
        <Typography variant="caption">
          The page you are looking for does not exist
        </Typography>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
