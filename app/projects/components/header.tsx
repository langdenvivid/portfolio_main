import Link from "next/link";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import { Project } from "../eazy-buy/page";

export default function Header(props:{project:Project}) {
    return (
        <header
            className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
        >
            <div className="container flex flex-row-start items-center justify-between p-6 mx-auto">
                <Link
                    href="/projects"
                    className="duration-200 text-zinc-300 hover:text-zinc-100"
                >
                    <ArrowLeft className="w-6 h-6 " />
                </Link>
            </div>

            <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                            {props.project.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-zinc-300">
                            {props.project.description}
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                
                                <Link target="_blank" href={props.project.gitLink}>
                                    GitHub <span aria-hidden="true">&rarr;</span>
                                </Link>
                                {   props.project.websiteLink &&
                                    <Link target="_blank" href={props.project.websiteLink}>
                                        Website <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                }
                 
                    
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}