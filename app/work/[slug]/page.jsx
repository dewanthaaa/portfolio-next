"use client";
import { workData } from "@/assets/assets";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SipetikDetail() {
  const params = useParams();
  const project = workData.find((p) => p.id === params.slug); // Fix comparison

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={project.bgImage}
            alt={project.title}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {project.fullDescription || "Lorem ipsum..."}
          </p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            See on Github
          </a>
        </div>
      </div>
    </div>
  );
}
