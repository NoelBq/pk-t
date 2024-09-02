import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { type Metadata } from "next";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Poke Test",
  description: "Search for your favorite Pokemon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <MainLayout hasFooter>{children}</MainLayout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Suspense>
      </body>
    </html>
  );
}
