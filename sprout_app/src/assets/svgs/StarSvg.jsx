import * as React from "react"
const StarSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={46}
        fill="none"
        {...props}
    >
        <path
            fill="#BEE0BD"
            fillOpacity={0.26}
            stroke="#BEE0BD"
            strokeWidth={3}
            d="m24 4.854 4.186 12.884.337 1.037H43.16L32.2 26.737l-.882.64.337 1.037 4.187 12.884-10.96-7.962-.882-.641-.882.64-10.96 7.963 4.187-12.884.337-1.036-.882-.64-10.96-7.963h14.637l.337-1.037L24 4.854Z"
        />
    </svg>
)
export default StarSvg
