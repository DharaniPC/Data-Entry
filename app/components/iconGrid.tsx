interface sectionProp {
    icon?: string,
    title: string,
    description?: string,
    buttonLabel?: string,
    buttonLink?: string,
}

interface sectionContentProp {
    sectionContent: sectionProp[]
}

export default function IconGrid({ sectionContent }: sectionContentProp) {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {sectionContent.map((item, index) => (

                <div key={index} className="p-8 rounded-xl bg-gray-100 border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300">

                    {item.icon &&
                        (<div className="mb-4">
                            <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                        </div>
                        )}

                    {item.title &&
                        (
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        )}
                    {item.description &&
                        (
                            <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description}} />
                        )}
                </div>
            ))}

        </div>
    );
}