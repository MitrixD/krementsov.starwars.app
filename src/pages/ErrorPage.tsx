import { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";

const ErrorPage: FC = () => {
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
        <Typography variant="h3">Oops, something went wrong!</Typography>
      </Stack>
    </Container>
  );
};

export default ErrorPage;
