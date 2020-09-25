import React from "react"

type PortraitCardProps = {
  image: string
  heading: string
  caption: string
  markdown: string
}

export default function PortraitCard({
  image,
  heading,
  caption,
  markdown,
}: PortraitCardProps) {
  return (
    <>
      <ul>
        <li>heading: {heading}</li>
        <li>image: {image}</li>
        <li>caption: {caption}</li>
        <li>
          itemList:
          <div dangerouslySetInnerHTML={{ __html: markdown }} />
        </li>
      </ul>
    </>
  )
}
