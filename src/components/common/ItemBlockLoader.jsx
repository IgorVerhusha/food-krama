import React from "react"
import ContentLoader from "react-content-loader"

export const ItemBlockLoader = React.memo(() => (
    <ContentLoader
        speed={2}
        width={300}
        height={460}
        viewBox="0 0 300 520"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <circle cx="140" cy="130" r="130" />
        <rect x="0" y="263" rx="0" ry="0" width="290" height="30" />
        <rect x="0" y="308" rx="0" ry="0" width="290" height="71" />
        <rect x="0" y="392" rx="0" ry="0" width="290" height="49" />
    </ContentLoader>
)
)