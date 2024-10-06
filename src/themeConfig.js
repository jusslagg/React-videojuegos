import { createTheme } from "@mui/material";

// Colores representativos
const nintendoColor = "#E60012"; // Rojo Nintendo
const playstationColor = "#003791"; // Azul PlayStation
const pcColor = "#1E1E1E"; // Gris oscuro para PC
const accentColor = "#FFAD60"; // Color de acento

// Tema claro
export const customTheme = createTheme({
  palette: {
    primary: {
      main: nintendoColor, // Rojo Nintendo
      contrastText: "#FFFFFF", // Texto blanco
    },
    secondary: {
      main: playstationColor, // Azul PlayStation
      contrastText: "#FFFFFF", // Texto blanco
    },
    background: {
      default: "#F5F5F5", // Fondo claro
      paper: "#FFFFFF", // Fondo de componentes
    },
    accent: {
      main: accentColor, // Color de acento
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      color: nintendoColor,
    },
    h2: {
      fontWeight: 600,
      color: playstationColor,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: accentColor, // Color de fondo en hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Sombra sutil para papel
        },
      },
    },
  },
});

// Tema oscuro
export const dark = createTheme({
  palette: {
    primary: {
      main: pcColor, // Gris oscuro para PC
      contrastText: "#FFFFFF", // Texto blanco
    },
    secondary: {
      main: playstationColor, // Azul PlayStation
      contrastText: "#FFFFFF", // Texto blanco
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1E1E1E", // Color de fondo de componentes
    },
    accent: {
      main: accentColor, // Color de acento
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      color: accentColor,
    },
    h2: {
      fontWeight: 600,
      color: playstationColor,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: accentColor, // Color de fondo en hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)", // Sombra para el tema oscuro
        },
      },
    },
  },
});
