import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full border-b border-primary">
      <Container className="flex-between">
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
