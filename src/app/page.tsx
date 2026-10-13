import Header from "@/components/Header"; 
import About from "@/components/About";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Levi Wheaton</h1>
        <p className="mt-4 text-lg">IT Operations | DevOps | AI Engineering</p>
      </main>

      <About />
      <Projects />
    </>
  );
}