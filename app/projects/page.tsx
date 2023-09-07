"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
	{
		href: "/projects/weather-wise",
		label: "React.js based weather application that integrates a weather API to provide real-time weather data and trends.",
		title: "Weather Wise",
        github: "",
        details: ""
	},
	{
		href: "/projects/react-notes",
		label: "Notes application that saves persistant data using the Web Storage API.",
		title: "React Notes",
        github: "",
        details: ""
	},
];

export default function Example() {
	return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen pb-16">
            <Navigation />

            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-2">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Personal projects that involved working with a wide array of technologies, languages, and frameworks.
                    </p>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    <Card>
                        <Link
                            href={"/projects/eazy-buy"}
                        >
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h2 id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    EazyBuy
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Full-stack ecommerce application that features a user registration system, order tracking, product reviews, and payment processing.
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                        {projects.map((project) => (
                            <Card>
                                <Link 
                                    href={project.href}
                                >
                                    <article className="p-4 md:p-8">
                                        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {project.title}
                                        </h2>
                                        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {project.label}
                                        </p>
                                    </article>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>

        </div>
	);
}
