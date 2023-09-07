"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Body from "../components/body";

export interface Project {
    title: string,
    description: string,
    gitLink: string,
    websiteLink?: string,
}

export default function Page() {
    const project: Project = {
        title: "React Notes",
        description: "Notes application that saves persistant data using the Web Storage API.",
        gitLink: "https://github.com/Graham2000/Notes",
        websiteLink: "https://graham2000.github.io/Notes/"
    }

	return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteles">
                <img src="../image/notes.png" className="rounded-md border border-zinc-200" />

            </article>
        </div>
	);
};
