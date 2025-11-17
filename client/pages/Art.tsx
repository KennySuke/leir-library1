import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectList }  from "@/config/siteConfig";

export default function Art() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main
        className="
          min-h-screen flex items-start justify-center
          px-4 md:px-8 lg:px-16
        "
      >
        <div className="w-full flex flex-col md:flex-row items-start pt-20 gap-5 md:gap-6 lg:gap-[20px]">
          {projectList.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="
                relative
                w-full
                md:w-[236px]
                aspect-[118/350]
                overflow-hidden
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  transition duration-500
                  filter grayscale
                  hover:grayscale-0
                "
                style={{
                  transform: `translateX(${project.shiftXPercent}%)`,
                  filter: `grayscale(1) brightness(${project.grayscaleExposure})`,
                }}
              />
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}