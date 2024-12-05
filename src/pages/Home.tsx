import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
    return (
        <div className="flex flex-col items-center p-4 gap-10">
            <div className="text-center gap-2">
                <h1 className="text-4xl font-semibold text-zinc-100">Welcome To My Website !</h1>
            </div>
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {[
                        "Hello",
                        "Hola",
                        "Bonjour",
                        "Hallo",
                        "Ciao",
                        "こんにちは",
                        "안녕하세요",
                        "你好",
                        "Olá",
                        "Здравствуйте",
                    ].map((greeting, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{greeting}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Home
