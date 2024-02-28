
interface FooterElementProps {
    title: string,
    subtitle: string[]
}

const FooterElement = ({ title, subtitle }: FooterElementProps) => {
    return (
        <div className="flex-col space-y-3">
            <div className="text-lg font-bold text-black">
                {title}
            </div>
            {subtitle.map((subtitles, index) => (
                <div key={index} className="text-sm font-[500px] text-[#74767e]">
                        {subtitles}
                </div>
            ))}
        </div>
    )
}

export default FooterElement