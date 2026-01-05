
interface sectionProp {
    title: string,
    description?: string,
    buttonLabel?: string,
    buttonLink?: string
}

export default function HighlightSection({ title, description, buttonLabel, buttonLink }: sectionProp) {
    return (
        <div className="flex items-center justify-center px-6 py-10 bg-[var(--primary-color)] text-white">
            <div className="max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />

                {description &&
                    (
                        <p className="text-lg md:text-xl mb-6" dangerouslySetInnerHTML={{ __html: description }} />
                    )
                }

                {buttonLabel &&
                    (<a href={buttonLink}>
                        <button className="cursor-pointer px-8 py-3 bg-white text-[var(--primary-color)] border-2 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border-white transition">
                            {buttonLabel}
                        </button>
                    </a>
                    )}
            </div>
        </div>
    );
}