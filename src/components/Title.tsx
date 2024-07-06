type Title = {
  title: string;
  description: string;
};
const Title = ({ title, description }: Title) => {
  return (
    <div className="flex flex-col items-center gap-7 mt-10 mb-7">
      <h1 className="font-bold text-xl lg:text-4xl md:text-2xl text-indigo-800">
        {title}
      </h1>
      <p className="break-words w-full lg:max-w-3xl md:max-w-2xl text-sm md:text-base  sm:text-center  px-2 md:px-0 leading-relaxed text-[#2F4F4F] font-thin">
        {description}
      </p>
    </div>
  );
};

export default Title;
