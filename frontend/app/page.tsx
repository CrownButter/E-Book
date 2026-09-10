import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author: string | null;
  description: string | null;
  coverUrl: string | null;
};

async function getBooks(): Promise<Book[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

  try {
    const response = await fetch(`${apiUrl}/api/books`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const books = await getBooks();

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="brand">E-Book</div>
          <nav>Login</nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Baca buku digital dengan sederhana.</h1>
          <p>
            MVP platform E-Book. Kita mulai dari hal yang benar-benar dibutuhkan: katalog buku,
            library pengguna, dan pengalaman membaca.
          </p>
        </section>

        <section className="section">
          <h2>Buku pilihan</h2>

          {books.length === 0 ? (
            <p>Belum ada buku tersedia.</p>
          ) : (
            <div className="book-grid">
              {books.map((book) => (
                <Link href={`/books/${book.id}`} className="book-card" key={book.id}>
                  <h3>{book.title}</h3>
                  <div>{book.author ?? "Penulis belum tersedia"}</div>
                  <p>{book.description ?? "Belum ada deskripsi."}</p>
                  <span className="badge">Tersedia</span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer container">E-Book MVP</footer>
    </>
  );
}
