import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const AboutMe = () => {
    return (
        <div className="min-h-screen flex flex-row">
            <div className="w-1/2 p-4">
                <div className="flex flex-col items-center p-4 gap-5">
                    <img className="w-48 h-48 rounded-full" src="https://avatars.githubusercontent.com/u/126051047?v=4" alt="Profile" />
                    <div className="text-center gap-2">
                        <h1 className="text-4xl font-semibold text-zinc-100">Muhammad Lefi Rachmad</h1>
                        <p className="text-lg font-semibold text-zinc-100">Fullstack Developer</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-3xl font-bold text-zinc-100 mb-10">Skills</h2>
                <Accordion type="single" collapsible className="w-full text-zinc-100">
                    {['Flutter', 'Laravel', 'React', 'Typescript', 'Figma'].map(skill => (
                        <AccordionItem key={skill} value={skill.toLowerCase()}>
                            <AccordionTrigger className="text-lg">{`Skill saya dalam ${skill}`}</AccordionTrigger>
                            <AccordionContent>
                                    <p style={{ color: skill === 'Figma' ? '#87ceeb' : skill === 'Flutter' ? '#45b3fa' : skill === 'Laravel' ? '#c39bd3' : skill === 'React' ? '#34d058' : '#ffb142' }}>
                                        {`Membuat aplikasi ${skill === 'Figma' ? 'UI/UX' : skill === 'Flutter' ? 'mobile' : 'web'} menggunakan bahasa pemrograman ${skill === 'Figma' ? '' : skill === 'Flutter' ? 'dart' : skill === 'Laravel' ? 'PHP' : skill === 'React' ? 'JavaScript' : 'TypeScript'}`}
                                    </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default AboutMe
