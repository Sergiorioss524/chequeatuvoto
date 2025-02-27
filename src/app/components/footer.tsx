import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-screen-lg px-4 py-6 sm:px-6 lg:px-8">
        {/* Flex container to align logo and links properly */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          
          {/* Logo with proper size */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={150}  // Adjust width
              height={50}   // Adjust height
              className="w-[150px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="flex flex-wrap justify-center gap-x-6 mt-4 sm:mt-0">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
