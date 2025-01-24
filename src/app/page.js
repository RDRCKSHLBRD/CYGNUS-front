export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-parchment text-irisII">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 bg-porpoise text-irisII p-4 shadow-md z-50 border-box">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-light">Cygnus Ater</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-lg hover:text-chartreuse">Home</a></li>
              <li><a href="#" className="text-lg hover:text-chartreuse">About</a></li>
              <li><a href="#" className="text-lg hover:text-chartreuse">News</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <section className="box border border-irisII p-6 bg-porpoise">
            <h2 className="text-xl font-light mb-4">Local News</h2>
            <p>Local news stories will go here. Think of this as the front page for community updates.</p>
          </section>

          {/* Column 2 */}
          <section className="box border border-irisII p-6 bg-porpoise">
            <h2 className="text-xl font-light mb-4">World News</h2>
            <p>Headlines and stories from around the world. This could feature international affairs or breaking news.</p>
          </section>

          {/* Column 3 */}
          <section className="box border border-irisII p-6 bg-porpoise">
            <h2 className="text-xl font-light mb-4">Opinion & Features</h2>
            <p>Opinion pieces, editorials, and featured stories will live in this section.</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-porpoise text-irisII text-center p-4 border-box">
        <p className="text-sm">© 2023 Cygnus Ater | All Rights Reserved</p>
      </footer>
    </div>
  );
}
