import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-8 sm:p-16 lg:p-24">
      {/* Conteúdo principal centralizado verticalmente */}
      <div className="flex flex-1 items-center">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-[#40281C] dark:text-[#FEFDF3]" style={{ fontFamily: 'var(--font-instrument-serif)' }}>
            Lucas Ikawa
          </h1>
          <div className="text-xl sm:text-2xl text-[#40281C] dark:text-[#FEFDF3] space-y-1" style={{ fontFamily: 'var(--font-urbanist)' }}>
            <p>
              Growth CRM at{" "}
              <a 
                href="https://mevo.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-all"
              >
                Mevo
              </a>
            </p>
            <p>
              Computer Science at{" "}
              <a 
                href="https://www.insper.edu.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-all"
              >
                Insper
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer com links sociais */}
      <footer className="w-full">
        <nav className="flex gap-8 sm:gap-12 text-lg sm:text-xl text-[#40281C] dark:text-[#FEFDF3]" style={{ fontFamily: 'var(--font-urbanist)' }}>
          <a 
            href="https://linkedin.com/in/lucas-ikawa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline decoration-1 underline-offset-4 transition-all"
          >
            linkedin
          </a>
          <a 
            href="mailto:lucas.ikawa@gmail.com"
            className="hover:underline decoration-1 underline-offset-4 transition-all"
          >
            email
          </a>
          <a 
            href="https://github.com/Lucasikawa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline decoration-1 underline-offset-4 transition-all"
          >
            github
          </a>
          <a 
            href="https://wa.me/5511976734288" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline decoration-1 underline-offset-4 transition-all"
          >
            whatsapp
          </a>
        </nav>
      </footer>
    </div>
  );
}