import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 font-mono">
      <h1 className="text-3xl font-bold mb-8 text-center">Important CS Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['DBMS', 'OS', 'CN'].map((subject) => (
          <Link
            href={`/${subject.toLowerCase()}`}
            key={subject}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">{subject}</h2>
            <p>Important questions for {subject}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}