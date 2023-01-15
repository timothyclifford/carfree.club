import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
}
