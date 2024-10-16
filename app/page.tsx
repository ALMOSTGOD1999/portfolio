import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="mb-16 text-center">
        <Image
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
          alt="Rahul Mukherjee"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hi, I'm Rahul!</h1>
        <p className="text-lg md:text-xl mb-4">Frontend Developer based in Kolkata, India</p>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Working towards creating software that makes life easier and more meaningful.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="mb-16" id="projects">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Grave the Crave"
            description="A web app that showcases a bakery and its items."
          />
          <ProjectCard
            title="COSMOS RedSHIFT"
            description="A physics tutorial app built with Next.js and React."
          />
          <ProjectCard
            title="Mesopoptemia"
            description="A blog app built on Next.js and React."
          />
        </div>
      </section>

      <section id="about">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base">
          <p>
            Hi, my name is Rahul and I am a highly ambitious, self-motivated, and driven Frontend Developer based in Kolkata, India.
          </p>
          <p>
            I graduated from Camellia Institute of Technology & Management in 2023 with a degree in Civil Engineering. At the end of 2023, I learned Web Development and have been working in the field ever since.
          </p>
          <p>
            I have a wide range of hobbies and passions that keep me busy. From reading, playing chess, traveling, to making dishes, I am always seeking new experiences and love to keep myself engaged and learning new things.
          </p>
          <p>
            I believe that you should never stop growing and that's what I strive to do. I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities. 🙂
          </p>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}