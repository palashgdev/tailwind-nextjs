import Footer from "components/Footer";
import Header from "components/Header";

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

interface AppLayoutProps {
  children: React.ReactNode;
}

export default AppLayout;
