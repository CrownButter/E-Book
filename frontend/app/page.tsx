const books = [
  { title: "Contoh Buku Pertama", author: "Penulis", description: "Placeholder untuk katalog E-Book." },
  { title: "Contoh Buku Kedua", author: "Penulis", description: "Nanti data ini akan berasal dari Spring Boot API." },
  { title: "Contoh Buku Ketiga", author: "Penulis", description: "Fokus awal: katalog, library, dan reader." },
];

export default function Home() {
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
          <div className="book-grid">
            {books.map((book) => (
              <article className="book-card" key={book.title}>
                <h3>{book.title}</h3>
                <div>{book.author}</div>
                <p>{book.description}</p>
                <span className="badge">Segera tersedia</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer container">E-Book MVP</footer>
    </>
  );
}
