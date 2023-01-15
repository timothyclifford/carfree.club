import Image from "next/image";
import { Button, Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Image
          src="/favicon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Car Free Club"
          width={64}
          height={64}
          style={{ objectFit: "contain", objectPosition: "right center" }}
        ></Image>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Car Free Club
        </span>
      </Navbar.Brand>
      <div className="flex items-center lg:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/car-free-calculator">
          Car Free Calculator
        </Navbar.Link>
        <Navbar.Link href="/why-live-car-free">Why live car free?</Navbar.Link>
        <Navbar.Link href="/our-story">Our story</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
