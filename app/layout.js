import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gopal Jadhav - QA Automation Engineer",
  description: "QA Automation Engineer with 5+ years in Selenium, Java, TestNG, and API Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
