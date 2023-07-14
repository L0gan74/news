"use client";

import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import { Providers } from "@/store/provider";

import { NextAuthSessionProvider } from "./sessionProvuder";

export const metadata: Metadata = {
  title: "L0gan News",
  description: "description description descriptiondescription v",
};

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
