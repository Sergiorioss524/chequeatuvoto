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
    <footer className="bg-background border-t">
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex items-center">
          <Link href="/" className="flex items-center mt-4">
            <Image src="/logo.svg" alt="Logo" width={140} height={120} />
          </Link>
          </div>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-foreground/60 hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

