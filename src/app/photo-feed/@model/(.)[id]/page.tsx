import Image from "next/image";
import Model from "@/components/model";
import wondersImages, { WonderImage } from "../../wonders";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const photo: WonderImage = wondersImages.find((wonder) => wonder.id === id)!;
    return (
        <Model>
            <Card className="w-[450px] h-[600px]  ">
                <Image
                    src={photo.src}
                    alt={photo.name}
                    className="rounded-md w-full object-cover aspect-square"
                />
                <CardHeader>
                    <CardTitle>{photo.name}</CardTitle>
                    <CardDescription>
                        {photo.location}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <CardDescription> Photo by {photo.photographer}</CardDescription>
                </CardFooter>
            </Card>
        </Model>
    );
}