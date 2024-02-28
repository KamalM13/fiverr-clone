import CustomAccordion from "../custom-components/CustomAccordion"
import FooterElement from "../custom-components/FooterElement"

const Firstpart = () => {

    const subtitles = [
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "Music & Audio",
        "Fiverr Logo Maker",
        "Programming & Tech",
        "Data",
        "Business",
        "Lifestyle",
        "Photography",
        "End - to - End Projects",
        "Sitemap",
    ]
    return (
        <>
            <div className="hidden md:flex items-center justify-between p-10">
                <FooterElement
                    title="Categories"
                    subtitle={subtitles}
                />
                <FooterElement
                    title="Categories"
                    subtitle={subtitles}
                />
                <FooterElement
                    title="Categories"
                    subtitle={subtitles}
                />
                <FooterElement
                    title="Categories"
                    subtitle={subtitles}
                />
                <FooterElement
                    title="Categories"
                    subtitle={subtitles}
                />
            </div>
            <div className="md:hidden p-3">
                <CustomAccordion
                    title={"Categories"}
                    titles = {subtitles}
                />
                <CustomAccordion
                    title={"Categories"}
                    titles={subtitles}
                />
                <CustomAccordion
                    title={"Categories"}
                    titles={subtitles}
                />
            </div>
        </>
    )
}

export default Firstpart