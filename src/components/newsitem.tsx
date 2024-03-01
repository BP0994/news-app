/** @format */
"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";



export default function NewsItems({
  title,
  image,
  publishedAt,
  url
}: {
  title?: string;
  image?: string;
  publishedAt?:string;
  url?:string
}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{publishedAt}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
         
          alt="Card background"
          className="object-cover rounded-xl my-4"
          src={image}
          width={270}
        />
        <Button className="my-2"  href={url}>see more</Button>
      </CardBody>
    </Card>
  );
}
