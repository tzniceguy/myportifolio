import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  //configure pageExtensions to support markdown and mdx files
  pageExtensions: ["js", "ts", "tsx", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  //adding markdown plugins
});
export default withMDX(nextConfig);
