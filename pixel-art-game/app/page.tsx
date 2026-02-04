export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] flex items-center justify-center p-4">
      <iframe
        src="/game.html"
        className="w-full max-w-[850px] h-[600px] border-0 rounded-xl shadow-2xl"
        title="CodeQuest - A Aventura do Programador"
      />
    </main>
  )
}
