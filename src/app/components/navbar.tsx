import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Timeline", href: "#timeline" },
  { name: "Parties", href: "#parties" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
];

export function Navbar() {
  return (
    <nav className="bg-background border-b sticky top-0 z-10">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center mt-4">
            <Image src="/logo.svg" alt="Logo" width={140} height={120} />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-700 text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
