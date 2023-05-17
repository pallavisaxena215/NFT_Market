import "@styles/global.css";


export const metadata = {
  title: "nft_market",
  description: "Buy and sell tokens",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;