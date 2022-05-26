import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={294}
    height={400}
    viewBox="0 0 294 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="561" cy="487" r="49" />
    <circle cx="147" cy="105" r="102" />
    <rect x="115" y="360" rx="10" ry="10" width="130" height="22" />
    <rect x="45" y="230" rx="10" ry="10" width="203" height="40" />
    <rect x="45" y="290" rx="10" ry="10" width="203" height="50" />
    <rect x="45" y="360" rx="10" ry="10" width="60" height="22" />
  </ContentLoader>
);

export default Skeleton;
