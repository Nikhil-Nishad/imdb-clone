import Header from "./components/Header";
import "./globals.css";
import Providers from "./api/hello/Providers";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Ocean Of Movies",
  description: "By Nikhil Nishad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
