export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f5f3ef]">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-[#d4cebc] opacity-20"></div>
                <div className="absolute h-32 w-32 animate-pulse rounded-full border border-[#d4cebc] opacity-30"></div>
                <svg
                    className="h-16 w-16 text-[#3d3d3d] animate-bounce"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-12 7c0-2.2 1.8-4 4-4 .9 0 1.8.3 2.5.8.7-.5 1.6-.8 2.5-.8 2.2 0 4 1.8 4 4 0 3.9-4.5 7.2-6.5 7.2s-6.5-3.3-6.5-7.2z" />
                </svg>
            </div>
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold tracking-widest text-[#3d3d3d] uppercase opacity-80">
                    Molly&apos;s
                </h2>
                <p className="mt-2 text-sm font-medium italic text-[#8b8b8b] animate-pulse">
                    Pampering in progress...
                </p>
            </div>
            <div className="mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-[#e5e1d8]">
                <div className="h-full w-full origin-left animate-loading-bar bg-[#3d3d3d]"></div>
            </div>
        </div>
    );
}