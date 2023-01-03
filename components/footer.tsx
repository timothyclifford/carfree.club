export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <p className="text-xl">Car Free Club</p>
        <p>Save money, improve your health & protect the planet.</p>
      </div>
      <div>
        <span className="footer-title">Ditch your car</span>
        <a className="link link-hover">Why?</a>
        <a className="link link-hover">Get started</a>
        <a className="link link-hover">Alternatives</a>
        <a className="link link-hover">Common concerns</a>
      </div>
      <div>
        <span className="footer-title">About us</span>
        <a className="link link-hover">The Car Free Club Team</a>
        <a className="link link-hover">Contact us</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </div>
    </footer>
  );
}
