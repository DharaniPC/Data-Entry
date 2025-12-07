
interface BannerProps {
    title: string,
    description?: string,
    buttonLabel?: string,
    buttonLink?: string,
    bannerImage?: string
}
export default function Banner({ title, description, buttonLabel, buttonLink, bannerImage }: BannerProps) {
    const imageSrc = bannerImage || "/contact-us/Banner.jpg";
    return (
        <div className={`relative bg-cover bg-center h-[60vh] flex items-center justify-center`}
            style={{ backgroundImage: `url(${imageSrc})` }} >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-center text-white px-4 flex flex-col gap-5">
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && 
               ( <p className="max-w-2xl mx-auto text-lg">
                    {description}
                </p>)}
                {buttonLabel &&
                (<a href={buttonLink}>
                    <button className="cursor-pointer px-8 py-3 bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] rounded-lg font-semibold hover:bg-transparent hover:border-white transition">
                        {buttonLabel}
                    </button>
                </a>)}
            </div>
        </div>
    );
}