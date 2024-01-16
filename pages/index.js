import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "dummy-slug",
    title: "dummy-title",
    image: "getting-started-nextjs.png",
    excerpt: "dummy-excerpt",
    date: "2024-02-01",
  },
  {
    slug: "dummy-slug1",
    title: "dummy-title",
    image: "getting-started-nextjs.png",
    excerpt: "dummy-excerpt",
    date: "2024-02-01",
  },
  {
    slug: "dummy-slug2",
    title: "dummy-title",
    image: "getting-started-nextjs.png",
    excerpt: "dummy-excerpt",
    date: "2024-02-01",
  },
  {
    slug: "dummy-slug3",
    title: "dummy-title",
    image: "getting-started-nextjs.png",
    excerpt: "dummy-excerpt",
    date: "2024-02-01",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
