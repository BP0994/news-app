/** @format */
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Image, Link } from "@nextui-org/react";
import NewsItems from "./newsitem";

const NewsBoard = () => {
  const [table, setTable] = useState([]);
  const [food, setFood] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTable(data.articles);
        console.log(data.articles);
        // console.log(table);
      });
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setFood(data.categories);
        console.log(data.categories);
        // console.log(table);
      });
  }, []);

  return (
    <div>
      <h2>all data is here</h2>
      <div className="flex flex-wrap  md:gap-x-12 sm:mx-auto max-[1170px]:max-w-[800px]   md:p-12">
        {table?.map(
          (data: {
            title: string;
            content: string;
            description: string;
            url: string;
            urlToImage: string;
            author: string;
          }) => {
            return (
              <div className="" key={data.title ? data.title : "no title"}>
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {data.title ? data.title : "no content"}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {data.description
                        ? data.description.slice(0,100)
                        : " no data founeded"}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={
                          data.urlToImage
                            ? data.urlToImage
                            : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        {data.author ? data.author : "nodata founded"}
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        <Link href={data.url ? data.url : "/"} target="_blank">
                          See Details
                        </Link>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            );
          }
        )}
      </div>
      <div className="flex flex-wrap mx-auto my-12 w-[400px]">
        {food?.map(
          (data: {
            idCategory: string;
            strCategory: string;
            content: string;
            strCategoryDescription: string;
            url: string;
            strCategoryThumb: string;
            author: string;
          }) => {
            return (
              <div
                className="my-8 flex flex-wrap"
                key={data.idCategory ? data.idCategory : "nothing"}
              >
                <NewsItems
                  title={data.strCategory ? data.strCategory : "nothing here"}
                  image={
                    data.strCategoryThumb
                      ? data.strCategoryThumb
                      : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  publishedAt={
                    data.strCategoryDescription
                      ? data.strCategoryDescription
                      : "no author"
                  }
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
