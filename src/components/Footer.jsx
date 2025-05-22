export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-700 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} Daniela Mihalache. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 mt-2 md:mt-0">
          Designed &amp; built with care
        </p>
      </div>
    </footer>
  );
}
