import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI工具库 - 发现最佳AI工具",
  description: "探索最新、最实用的AI工具，提升您的工作效率和创造力。从文本生成到图像创作，从代码编写到视频制作，应有尽有。",
  keywords: "AI工具,人工智能,文本生成,图像生成,视频生成,代码生成,效率工具",
  authors: [{ name: "AI工具库" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
