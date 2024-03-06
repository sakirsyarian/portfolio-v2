import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Action from "@/components/Action";
import ProjectList from "@/components/ProjectList";

export default async function Project() {
  return (
    <>
      {/* header */}
      <Navbar />

      {/* content */}
      <div className="container">
        <div className="space-y-8 py-24">
          <div className="space-y-5 text-center">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <p>
              Please take a moment to explore my recent projects and discover
              what I&apos;ve been busy working on!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <ProjectList />
          </div>
        </div>

        {/* cta */}
        <Action />
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
