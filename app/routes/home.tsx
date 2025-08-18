import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

import { usePuterStore } from "../../lib/puter";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "CVGenius" },
        { name: "description", content: "Smart feedback for your dream job!" },
    ];
}

const Home = () => {
    const { auth, kv } = usePuterStore();
    const navigate = useNavigate();

    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState(false);

    useEffect(() => {
        if (!auth.isAuthenticated) navigate("/auth?next=/");
    }, [auth.isAuthenticated]);

    useEffect(() => {
        const loadResumes = async () => {
            setLoadingResumes(true);

            const resumes = (await kv.list("resume:*", true)) as KVItem[];

            const parsedResumes = resumes?.map((resume) => (
                JSON.parse(resume.value) as Resume
            ))

            setResumes(parsedResumes || []);
            setLoadingResumes(false);
        }

        loadResumes()
    }, []);

    return (
        <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
            <Navbar />
            <section className={"main-section"}>
                <div className={"py-16 page-heading"}>
                    <h1>Track Your Applications & Resume Ratings</h1>
                    { !loadingResumes && resumes.length === 0 ? (
                        <h2>No resumes found. Upload your first resume to get feedback.</h2>
                    ) : (
                        <h2>Review your submissions and check AI-powered feedback.</h2>
                    ) }
                </div>
                { loadingResumes && (
                    <div className={"flex flex-col items-center justify-center"}>
                        <img src={"/images/resume-scan-2.gif"} alt={"image"} className={"w-[200px]"} />
                    </div>
                ) }
                { !loadingResumes && resumes.length > 0 && (
                    <>
                        <div className={"resumes-section"}>
                            {resumes.map((resume) => (
                                <ResumeCard key={resume.id} resume={resume} />
                            ))}
                        </div>
                        <div className={"w-full flex justify-center mt-10 animate-fadeIn"}>
                            <Link to={"/wipe"} className={"w-fit flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"}>
                                <img src="/icons/info.svg" alt="settings" className="w-5 h-5" />
                                <span className="text-dark-200">Data Management</span>
                            </Link>
                        </div>
                    </>
                ) }
                { !loadingResumes && resumes.length === 0 && (
                    <div className={"mt-10 flex flex-col items-center justify-center gap-4"}>
                        <Link to={"/upload"} className={"w-fit text-xl font-semibold primary-button"}>
                            Upload Resume
                        </Link>
                        <Link to={"/wipe"} className={"mt-4 w-fit flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"}>
                            <img src="/icons/info.svg" alt="settings" className="w-5 h-5" />
                            <span className="text-dark-200">Data Management</span>
                        </Link>
                    </div>
                ) }
            </section>
        </main>
    );
};

export default Home;