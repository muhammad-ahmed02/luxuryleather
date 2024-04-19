import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";

interface DataCard {
  title: string;
  image: string;
}

type CategoryCardProps = {
  data: {
    title: string;
    cover?: string;
    cards: Array<DataCard>;
  };
  inverse?: boolean;
};

const CategoryCard = ({ data, inverse }: CategoryCardProps) => {
  const flexInverse = inverse || false;
  return (
    <div
      className={`flex justify-start items-center mt-20 ${
        flexInverse
          ? "md:flex-row-reverse flex-col-reverse"
          : "md:flex-row flex-col"
      }`}
    >
      {data.cover && (
        <div className={`md:w-[40%] md:block hidden`}>
          <Image className="" image={data.cover} alt="Logo" objectCover="object-contain" />
        </div>
      )}
      <div className={`${data.cover && "md:w-[60%]"}  w-full md:px-10 px-3`}>
        <Text
          as="h2"
          className="md:text-4xl text-2xl font-medium capitalize text-color3 m-4 text-center border-b"
        >
          {data.title}
        </Text>
        <div className="md:w-full h-auto mt-4 flex justify-center items-center flex-wrap">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="md:px-2 px-3 my-4 lg:w-[25%] md:w-[30%] w-[50%]"
            >
              <Card
                cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
                imageAlt={card.title}
                imageSrc={card.image}
                imageWrapperClass="w-full h-[150px] overflow-hidden"
                cover="group-hover:scale-125 transition duration-500 ease object-contain"
                textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
              >
                <div className="flex justify-center items-center">
                  <Text as="h4" className="text-base font-medium text-color3">
                    {card.title}
                  </Text>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
