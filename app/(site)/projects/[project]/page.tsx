import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";

type Props = {
    params: { project: string };
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return <div>
                <header>
                    <h1>{project.name}</h1>
                    <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </header>

                {/* project content */}
                <div>
                    <PortableText value={project.content}/>
                </div>
                
                {/* image goes here */}
                <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                />
            </div>
}