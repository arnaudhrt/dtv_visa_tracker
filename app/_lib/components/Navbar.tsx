"use client";
import Link from "next/link";
import { Plane } from "lucide-react";
import { Button } from "@/lib/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg">
              <Plane className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">DTV Tracker</span>
              <span className="text-xs text-muted-foreground leading-none">Visa Experiences</span>
            </div>
          </Link>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:inline-flex">
              Share Experience
            </Button>

            {/* Mobile menu button - for future implementation */}
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Simple fallback */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="/experiences" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              Experiences
            </Link>
            <Link href="/share" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              Share
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
