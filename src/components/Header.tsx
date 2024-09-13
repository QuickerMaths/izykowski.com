import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-l-2 border-r-2 z-50">
      <Container className="flex items-center justify-between py-4 px-6  from-gray-100  rounded-md">
        {/* Navigation */}
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
