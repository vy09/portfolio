export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © {currentYear} Luvy Muhammad Riski. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white hover:underline transition-all-smooth"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white hover:underline transition-all-smooth"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
