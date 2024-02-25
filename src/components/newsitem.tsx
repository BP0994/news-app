/** @format */
"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";



export default function NewsItems({
  title,
  image,
  description,
  publishedAt
}: {
  title: string;
  image: string;
  description: string;
  publishedAt:string
}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{publishedAt}</small>
        <h4 className="font-bold text-large">{description}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
         
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
