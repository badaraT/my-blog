// export default function Blog() {
//   const articles = [
//     { id: 1, title: 'Introduction à Docker', description: 'Apprenez les bases de Docker.' },
//     { id: 2, title: 'Comprendre Kubernetes', description: 'Explorez les concepts fondamentaux de Kubernetes.' },
//     { id: 3, title: 'Déployer avec AWS', description: 'Découvrez comment déployer une application sur AWS.' },
//   ];

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Bienvenue sur mon blog</h1>
//       <p className="text-lg mb-4">Voici les derniers articles :</p>
//       <ul>
//         {articles.map((article) => (
//           <li
//             key={article.id}
//             className="mb-4 p-4 border rounded shadow hover:bg-gray-100 transition"
//           >
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <p className="text-gray-600">{article.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//:::::::::::::::::::
// import { articles } from './data';

// export default function Blog() {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Bienvenue sur mon blog</h1>
//       <p className="text-lg mb-4">Voici les derniers articles :</p>
//       <ul>
//         {articles.map((article) => (
//           <li
//             key={article.id}
//             className="mb-4 p-4 border rounded shadow hover:bg-gray-100 transition"
//           >
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <p className="text-gray-600">{article.description}</p>
//             <a
//               href={`/blog/${article.id}`}
//               className="text-blue-500 hover:underline"
//             >
//               Lire plus
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//::::::::::



// export default function Blog() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-10">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Bienvenue sur mon blog
//       </h1>
//       <p className="text-lg text-center mb-6 text-gray-700">
//         Voici les derniers articles :
//       </p>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <li
//             key={article.id}
//             className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition p-6"
//           >
//             <h2 className="text-xl font-bold text-gray-800">{article.title}</h2>
//             <p className="text-gray-600 mt-2">{article.description}</p>
//             <a
//               href={`/blog/${article.id}`}
//               className="inline-block mt-4 text-blue-500 hover:text-blue-600 font-semibold"
//             >
//               Lire plus →
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
{/* <div className="bg-gray-100 min-h-screen p-10">
  <img
    src={article.image}
    alt={article.title}
    className="w-full h-64 object-cover rounded-lg mb-6"
  />
  <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
  <p className="text-gray-700 text-lg mb-6">{article.description}</p>
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-600">{article.content}</p>
  </div>
</div> */}

// import Link from 'next/link';
// import { articles } from './data';


// export default function BlogPage() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-10">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Bienvenue sur mon blog
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {articles.map((article) => (
//           <Link key={article.id} href={`/blog/${article.id}`}>
//             <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
//               <p className="text-gray-600">{article.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import Link from 'next/link';
import { articles } from './data';
import { marked } from 'marked';

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Bienvenue sur mon blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/blog/${article.id}`}>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
              <p
                className="text-gray-600"
                // Utilisation de "dangerouslySetInnerHTML" pour afficher le Markdown formaté
                dangerouslySetInnerHTML={{ __html: marked(article.description) }}
              ></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}




