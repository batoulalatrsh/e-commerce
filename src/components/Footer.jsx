export default function Footer() {
  return (
    <footer className="bg-surface text-text border-t border-black/15">
      <div className="max-w-7xl  mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-title text-xl tracking-widest mb-2">AURUM</h3>
          <span className="text-xs tracking-widest text-text">STUDIO</span>
          <p className="mt-4 text-sm text-text">
            Luxury fashion crafted with intention and designed to endure.
          </p>
        </div>

        <div>
          <h4 className="text-title text-sm tracking-widest mb-4">SHOP</h4>
          <ul className="space-y-2 text-sm text-text">
            <li>New Arrivals</li>
            <li>Outerwear</li>
            <li>Tops & Blouses</li>
            <li>Bottoms</li>
            <li>Dresses</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="text-title text-sm tracking-widest mb-4">HELP</h4>
          <ul className="space-y-2 text-sm text-text">
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div>
          <h4 className="text-title text-sm tracking-widest mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-text">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/15">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-text gap-4">
          <p>© 2025 Aurum Studio. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-title cursor-pointer">Instagram</span>
            <span className="hover:text-title cursor-pointer">Pinterest</span>
            <span className="hover:text-title cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
