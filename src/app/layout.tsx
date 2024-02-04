import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, ThemeProvider, Typography } from "@mui/material";
import PostsList from "./PostsList/page";
import theme from '../../theme'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classy Posts",
  description: "Classic unintelligible blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "lightskyblue",
            paddingTop: 4,                      
          }}
        >
          <Typography variant="h3" component="h1" textAlign="center" fontWeight='bold'>
            Lista Postarum
          </Typography>
          <PostsList />
        </Box>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
