export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflow: 'hidden', background: '#111' }}>
        {children}
      </body>
    </html>
  )
}
