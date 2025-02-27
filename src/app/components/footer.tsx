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
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
            <Image 
  src="/logo.svg" 
  alt="Logo" 
  width={110} 
  height={40} 
  className="h-auto w-auto" 
  priority
  onError={(e) => {
    console.error('Error loading image:', e);
  }}
/>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

