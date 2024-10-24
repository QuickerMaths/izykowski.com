import { getNews } from "@/api/getNews";
import Spinner from "@/components/Spinner";

const News = () => {
  const { data, isLoading } = getNews();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="w-11/12 mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Aktualności</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.records.map(({ id, title, params }) => (
            <li
              key={id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <h2 className="text-2xl text-center font-bold">{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: params.content }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
