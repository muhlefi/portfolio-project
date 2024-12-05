import { Card, CardContent } from "@/components/ui/card";

const Project = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <Card key={num}>
                    <CardContent className="flex flex-col">
                        <h2 className="text-2xl font-bold my-2">Project {num}</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non
                            magna. Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus.
                        </p>
                        <div className="flex justify-between mt-4">
                            <button className="text-primary-foreground transition-all hover:text-primary-foreground/90">
                                Learn More
                            </button>
                            <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 transition-all hover:bg-primary/90">
                                View Code
                            </button>
                        </div>
                    </CardContent>
                </Card>
            ))}            
        </div>
    );
};

export default Project;


