
'use client';

interface BannerProps {
    title: string,
    description?: string,
    buttonLabel?: string,
    buttonLink?: string,
    bannerImage?: string,
    bannerMobImage?: string;
}
export default function Banner({ title, description, buttonLabel, buttonLink, bannerImage, bannerMobImage }: BannerProps) {
    const imageSrc = bannerImage;
    const mobImageSrc = bannerMobImage;
    return (
        <div id="section-banner" className={`relative bg-cover bg-right md:bg-left-top flex items-center justify-center py-10 px-6 md:py-4 md:px-2
            h-full sm:h-[60vh] md:h-[60vh] `} 
             style={{
        backgroundImage: `url(${mobImageSrc})`,
      }}>

                {/* Desktop override */}
      <style jsx>{`
        @media (min-width: 768px) {
          #section-banner {
            background-image: url(${imageSrc});
          }
        }
      `}</style>


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