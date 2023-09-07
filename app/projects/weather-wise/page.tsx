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
        title: "Weather Wise",
        description: "React.js based weather application that integrates a weather API to provide real-time weather data and trends.",
        gitLink: "https://github.com/Graham2000/WeatherWise",
        websiteLink: "https://graham2000.github.io/WeatherWise/"
    }

	return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteles">
                <img src="../image/weather.png" className="rounded-md border border-zinc-200" />
            </article>
        </div>
	);
};
