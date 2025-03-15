import "./globals.css";
import Fathom from "./utils/fathom";
import Header from "./components/header";
import SidebarLayout from "./components/sidebarLayout";

export const metadata = {
  title: "Moxie Toolkit",
  description: "Rules and more for games 'Made with Moxie'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className="antialiased bg-grimwild-light text-grimwild-dark h-full"
      >
        {/* <Header /> */}
        <Fathom />
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
