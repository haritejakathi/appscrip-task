
export const metadata = {
    title: 'Product Listing Page',
    description: 'Browse our collection of amazing products.',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  