import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const selectedCatgory = "New";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            background: category.name === selectedCatgory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCatgory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCatgory ? "1" : "0.8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
