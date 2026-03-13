import { createTheme } from "@mui/material/styles";
import {brandColors} from "@/component/color/brandColors";


export const mainTheme = createTheme({
    palette: {
        primary: { main: brandColors.primary }
    }
});