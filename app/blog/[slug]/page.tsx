import { Post } from "../../interfaces/post";

interface PostProps {
  post: Post;
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Welcome to Blog {params.slug}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus
        atque incidunt ad earum tempora enim nam autem laborum nobis. Natus,
        voluptatibus quo excepturi totam est exercitationem? Aperiam, aspernatur
        eos.
      </div>
      <p>
        <strong>Written at:</strong>Date
      </p>
    </div>
  );
}
