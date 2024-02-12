import { FC } from "react";
import {Autocomplete, TextField, useMediaQuery, useTheme} from "@mui/material";
import { TOptions } from "../../types/options.ts";

interface SelectFilterProps {
  options: TOptions[];
  label: string;
  onSelectValue: (species: string | null) => void;
  id: string;
}

const SelectFilter: FC<SelectFilterProps> = (props) => {
  const { onSelectValue, options, id, label } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Autocomplete
      id={id}
      sx={{
        width: isSmallScreen ? "100%" : "auto",
        minWidth: isSmallScreen ? "100%" : 150,
        maxWidth: isSmallScreen ? "100%" : 200,
      }}
      size={"small"}
      disablePortal
      options={options}
      getOptionLabel={(option) => option.name}
      onChange={(_event, newValue) => onSelectValue(newValue?.name ?? null)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectFilter;
