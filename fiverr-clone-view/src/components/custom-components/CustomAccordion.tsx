import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom"

interface CustomAccordionProps {
    title: string,
    titles: string[]
}

const CustomAccordion = ({ title, titles }: CustomAccordionProps) => {
    return (
        <Accordion type="single" collapsible >
            <AccordionItem value="item-1">
                <AccordionTrigger className='hover:bg-[#f5f5f5] py-3 pl-1 rounded' >
                    {title}
                </AccordionTrigger>
                {titles.map((item, index) => (
                    //<AccordionTrigger key={index} title={item.title} subtitle />
                    <Link to="/" key={index}>
                        <AccordionContent className='ml-2 py-2 px-2 rounded hover:bg-[#f5f5f5]'>
                            {item}
                        </AccordionContent>
                    </Link>
                ))}
            </AccordionItem>
        </Accordion>
    )
}

export default CustomAccordion