// import { articles } from '../data';

// type ArticleProps = {
//   params: {
//     id: string;
//   };
// };

// export default function ArticlePage({ params }: ArticleProps) {
//   const article = articles.find((a) => a.id === params.id);

//   if (!article) {
//     return <p>Article introuvable.</p>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-10">
//       <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
//       <p className="text-gray-700 text-lg mb-6">{article.description}</p>
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <p className="text-gray-600">{article.content}</p>
//       </div>
//     </div>
//   );
// }
import { articles } from '../data';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    return <div>Article non trouvé.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{article.description}</p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">{article.content}</p>
      </div>
      <Link href="/blog" className="block mt-4 text-blue-500 hover:text-blue-600">
        ← Retour au blog
      </Link>
    </div>
  );
}




