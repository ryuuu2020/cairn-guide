import type { Metadata } from 'next';
import './globals.css';
import SchemaMarkup from '@/shared/SchemaMarkup';


export const metadata: Metadata = {
  title: 'Cairn - Field Journal',
  description: 'The ultimate Cairn guide with builds, strategies, tier lists, and in-depth walkthroughs.',
  metadataBase: new URL("https://cairn.gguidehub.com"),
  openGraph: {
    title: 'Cairn',
    description: 'The ultimate Cairn guide with builds, strategies, tier lists, and in-depth walkthroughs.',
    type: 'website',
  },
  verification: {
    google: 'google4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google4cd6cdf221ea7b0b" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous"></script>
  </head>
      <body className="font-body min-h-screen bg-field-paper">
        {children}
      </body>
    </html>
  );
}
