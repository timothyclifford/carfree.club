export const PageTitle = (props: {
  title: string;
  subTitle?: string | undefined;
}) => {
  return (
    <div className="max-w-2xl mx-auto mb-4 lg:py-8">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        {props.title}
      </h1>
      {props.subTitle && (
        <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {props.subTitle}
        </p>
      )}
    </div>
  );
};
