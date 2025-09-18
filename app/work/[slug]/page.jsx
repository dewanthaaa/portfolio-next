"use client";
import { workData } from "@/assets/assets";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import ProjectSlideshow from "@/app/components/projectslideshow";

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
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="w-full bg-gray-300 px-2 rounded-lg">
          {/* Slideshow */}
          <ProjectSlideshow screenshots={project.screenshots} />
        </div>

        {/* Project Info Section - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-gray-900 dark:text-gray-300 text-justify mb-8 leading-relaxed">
            {project.fullDescription || "Lorem ipsum..."}
          </p>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Github Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            See on Github
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
