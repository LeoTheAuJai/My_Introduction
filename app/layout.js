
// app/layout.js
import './globals.css';

export const metadata = {
  title: '我的作品集',
  description: '個人作品集網站',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
}