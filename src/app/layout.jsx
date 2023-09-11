import './globals.scss';

export const metadata = {
  title: 'Monochrome',
  description: 'Watches for antreprenors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
