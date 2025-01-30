import localFont from "next/font/local";
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
