type Title = {
  title: string;
  description: string;
};
const Title = ({ title, description }: Title) => {
  return (
    <div className="flex flex-col items-center gap-7 mt-10 mb-14">
      <h1 className="font-bold text-4xl text-indigo-800">{title}</h1>
      <p className="break-words max-w-3xl text-center leading-relaxed text-[#2F4F4F] font-thin">
        {description}
      </p>
    </div>
  );
};

export default Title;
