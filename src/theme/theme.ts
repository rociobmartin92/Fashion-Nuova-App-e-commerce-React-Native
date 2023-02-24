import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    fashion: {
      lightBlue50: "#C5E0ED",
      lightBlue100: "#93DFFF",
      blue: "#009EE1",
      darkBlue: "#002941",
      black: "#2D3748",
      grey: "#818992",
      white: "#FFFFFF",
      pink: "#FB8DA0"
    },
  },
  components: {
    Input: {
      variants: {
        default: {
          color: "red",
        },
      },
    },
  },
});
