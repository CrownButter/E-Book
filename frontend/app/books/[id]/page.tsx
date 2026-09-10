import Link from "next/link";
import { notFound } from "next/navigation";

type Book = {
  id: number;
  title: string;
  author: string | null;
  description: string | null;
  coverUrl: string | null;
};

async function getBook(id: string): Promise<Book | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

  try {
    const response = await fetch(`${apiUrl}/api/books/${id}`, {
      cache: "no-store",
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    return response.json();
  } catch {
    return null;
  }
}

export default async function BookDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await getBook(id);

  if (!book) {
    notFound();
  }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            E-Book
          </Link>
          <nav>Login</nav>
        </div>
      </header>

      <main className="container">
        <section className="book-detail">
          <Link href="/" className="back-link">
            ← Kembali ke katalog
          </Link>

          <div className="book-detail-content">
            <div className="book-cover">
              {book.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={book.coverUrl} alt={`Cover ${book.title}`} />
              ) : (
                <span>Belum ada cover</span>
              )}
            </div>

            <div className="book-info">
              <span className="badge">Tersedia</span>
              <h1>{book.title}</h1>
              <p className="book-author">
                {book.author ?? "Penulis belum tersedia"}
              </p>
              <p className="book-description">
                {book.description ?? "Belum ada deskripsi."}
              </p>
              <button type="button" className="primary-button">
                Tambah ke Library
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">E-Book MVP</footer>
    </>
  );
}
