import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton: React.FC = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="8" y="283" rx="10" ry="10" width="255" height="27" />
        <circle cx="139" cy="143" r="125" />
        <rect x="0" y="327" rx="10" ry="10" width="270" height="69" />
        <rect x="0" y="411" rx="10" ry="10" width="90" height="26" />
        <rect x="115" y="407" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default PizzaBlockSkeleton