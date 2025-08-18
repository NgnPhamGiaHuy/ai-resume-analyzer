import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { usePuterStore } from "../../lib/puter";
import Navbar from "~/components/Navbar";

const WipeApp = () => {
    const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading]);

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            for (const file of files) {
                await fs.delete(file.path);
            }

            await kv.flush();

            loadFiles();
        } catch (err) {
            console.error("Error deleting data:", err);
        } finally {
            setIsDeleting(false);
        }
    };

    if (isLoading) {
        return (
            <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
                <Navbar />
                <section className={"main-section"}>
                    <div className={"flex flex-col items-center justify-center h-[50vh]"}>
                        <img src={"/images/resume-scan-2.gif"} alt={"loading"} className={"w-[200px]"} />
                        <h2>Loading...</h2>
                    </div>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
                <Navbar />
                <section className={"main-section"}>
                    <div className={"flex flex-col items-center justify-center h-[50vh] animate-fadeIn"}>
                        <h2>Error: {error}</h2>
                        <button
                            onClick={() => clearError()}
                            className={"primary-button mt-4 w-fit px-8 hover:primary-gradient-hover transition-all duration-300"}
                        >
                            Try Again
                        </button>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
            <Navbar />
            <section className={"main-section animate-fadeIn"}>
                <div className={"page-heading py-16 animate-fadeIn"}>
                    <h1>Data Management</h1>
                    <h2>Manage your application data and files</h2>
                </div>

                <div className={"bg-white rounded-lg p-8 w-full max-w-3xl shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"}>
                    <div className={"flex flex-col gap-8"}>
                        <div className={"flex flex-row items-center gap-4 animate-fadeIn"} style={{ animationDelay: "100ms" }}>
                            <img src={"/icons/info.svg"} alt={"info"} className={"w-6 h-6"} />
                            <p className={"text-dark-200"}>
                                You are signed in as <span className={"font-semibold"}>{auth.user?.username}</span>
                            </p>
                        </div>

                        <div className={"flex flex-col gap-4 animate-fadeIn"} style={{ animationDelay: "200ms" }}>
                            <h3 className={"text-xl font-semibold"}>Your Files</h3>
                            {files.length === 0 ? (
                                <p className={"text-dark-200"}>No files found.</p>
                            ) : (
                                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                                    {files.map((file, index) => (
                                        <div
                                            key={file.id}
                                            className={"flex flex-row gap-2 items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 animate-fadeIn"}
                                            style={{ animationDelay: `${300 + index * 100}ms` }}
                                        >
                                            <img src={"/images/pdf.png"} alt={"file"} className={"w-6 h-6"} />
                                            <p className={"text-dark-200 truncate"}>{file.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={"border-t border-gray-200 pt-6 mt-4 animate-fadeIn"} style={{ animationDelay: "400ms" }}>
                            <div className={"flex flex-col gap-4"}>
                                <h3 className={"text-xl font-semibold text-red-600"}>Danger Zone</h3>
                                <p className={"text-dark-200"}>
                                    This action will permanently delete all your files and reset your application data.
                                    This cannot be undone.
                                </p>

                                <button
                                    className={"px-6 py-3 bg-red-600 text-white rounded-lg cursor-pointer w-fit hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95"}
                                    onClick={() => handleDelete()}
                                    disabled={isDeleting || files.length === 0}
                                >
                                    {isDeleting ? (
                                        <>
                                            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                                            Deleting...
                                        </>
                                    ) : (
                                        <>
                                            <img src="/icons/cross.svg" alt="delete" className="w-4 h-4" />
                                            Wipe All Data
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WipeApp;