import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f5f3ef] px-4 text-center">
            {/* Visual: A "Lost Dog" theme */}
            <div className="relative mb-8">
                <span className="text-8xl">🐕</span>
                <span className="absolute -top-2 -right-2 text-4xl">❓</span>
            </div>

            <h1 className="text-4xl font-extrabold text-[#3d3d3d] mb-4 tracking-tight">
                404 - Paws Not Found
            </h1>

            <p className="text-[#8b8b8b] mb-8 text-lg max-w-sm">
                We searched everywhere, but we couldn&apos;t find the page you were looking for. Maybe it ran off to the park?
            </p>

            <Link
                href="/"
                className="group flex items-center gap-2 px-8 py-4 bg-[#3d3d3d] text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
                <span>Return to the Spa</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            {/* Optional: Add a "Quick Links" section below */}
            <div className="mt-12 grid grid-cols-2 gap-8 text-sm font-medium text-[#3d3d3d] opacity-60">
                <Link href="/services" className="hover:underline">Our Services</Link>
                <Link href="/contact" className="hover:underline">Book Appointment</Link>
            </div>
        </div>
    );
}