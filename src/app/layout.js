import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../../components/Sidebar.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
