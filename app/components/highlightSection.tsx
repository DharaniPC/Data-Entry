
interface sectionProp {
    title: string,
    description?: string,
    buttonLabel: string,
    buttonLink: string
}

export default function HighlightSection({ title, description, buttonLabel, buttonLink }: sectionProp) {
    return (
        <div className="flex items-center justify-center px-6 py-10 bg-[var(--primary-color-10)]">
            <div className="max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: title }} />

                {description &&
                   ( <p className="text-lg md:text-xl text-gray-600 mb-6">
                        {description}
                    </p>)
                }

                <a href={buttonLink}>
                    <button className="cursor-pointer px-8 py-3 bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] rounded-lg font-semibold hover:bg-transparent hover:text-[var(--primary-color)] transition">
                        {buttonLabel}
                    </button>
                </a>
            </div>
        </div>
    );
}