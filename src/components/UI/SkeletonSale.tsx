import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const SkeletonSale = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={450}
    height={320}
    viewBox="0 0 450 320"
    backgroundColor="#f3f1f1"
    foregroundColor="#ebe6e6"
    {...props}
  >
    <circle cx="561" cy="487" r="49" />
    <rect x="2" y="2" rx="10" ry="10" width="450" height="320" />
    <rect x="277" y="178" rx="0" ry="0" width="1" height="1" />
  </ContentLoader>
);

export default SkeletonSale;
