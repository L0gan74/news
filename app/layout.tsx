"use client";

import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Providers } from "@/store/provider";

import { NextAuthSessionProvider } from "./sessionProvuder";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <Providers>
        <html lang="ru">
          <body>
            <div className="container">
              <NextAuthSessionProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </NextAuthSessionProvider>
            </div>
          </body>
        </html>
      </Providers>
 
  );
}
