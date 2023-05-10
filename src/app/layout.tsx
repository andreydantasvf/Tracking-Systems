import './globals.css'

export const metadata = {
  title: 'Tracking Systems',
  description: 'Build visual tracking systems for your customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-gray-100 font-[Poppins]'>{children}</body>
    </html>
  )
}
