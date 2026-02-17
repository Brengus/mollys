"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f5f3ef] px-4 text-center">
            {/* Visual: A "Tangled Leash" or Sad Paw feel */}
            <div className="mb-6 text-6xl">🦮🆘</div>

            <h1 className="text-3xl font-bold text-[#3d3d3d] mb-4">
                Oops! Our leash got a bit tangled.
            </h1>

            <p className="text-[#8b8b8b] mb-8 max-w-md">
                Something went wrong on our end. Don&apos;t worry, your furry friends are still safe!
            </p>

            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-[#3d3d3d] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all"
                >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="px-6 py-3 border border-[#3d3d3d] text-[#3d3d3d] rounded-full font-semibold hover:bg-[#3d3d3d] hover:text-white transition-all"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}