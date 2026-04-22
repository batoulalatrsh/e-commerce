export default function Footer() {
  return (
    <footer class="bg-surface text-text border-t border-black/15">
      <div class="max-w-7xl  mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 class="text-title text-xl tracking-widest mb-2">AURUM</h3>
          <span class="text-xs tracking-widest text-text">STUDIO</span>
          <p class="mt-4 text-sm text-text">
            Luxury fashion crafted with intention and designed to endure.
          </p>
        </div>

        <div>
          <h4 class="text-title text-sm tracking-widest mb-4">SHOP</h4>
          <ul class="space-y-2 text-sm text-text">
            <li>New Arrivals</li>
            <li>Outerwear</li>
            <li>Tops & Blouses</li>
            <li>Bottoms</li>
            <li>Dresses</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 class="text-title text-sm tracking-widest mb-4">HELP</h4>
          <ul class="space-y-2 text-sm text-text">
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div>
          <h4 class="text-title text-sm tracking-widest mb-4">COMPANY</h4>
          <ul class="space-y-2 text-sm text-text">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-black/15">
        <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-text gap-4">
          <p>© 2025 Aurum Studio. All rights reserved.</p>

          <div class="flex gap-6">
            <span class="hover:text-title cursor-pointer">Instagram</span>
            <span class="hover:text-title cursor-pointer">Pinterest</span>
            <span class="hover:text-title cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
