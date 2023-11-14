import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrc = src.replace(".jpg", ".avif");
  const avif2xSrc = src.replace(".jpg", "@2x.avif");
  const avif3xSrc = src.replace(".jpg", "@3x.avif");
  const jpg2xSrc = src.replace(".jpg", "@2x.jpg");
  const jpg3xSrc = src.replace(".jpg", "@3x.jpg");

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
              ${avifSrc} 1x,
              ${avif2xSrc} 2x,
              ${avif3xSrc} 3x
            `}
          />
          <source
            type="image/jpeg"
            srcSet={`
              ${src} 1x,
              ${jpg2xSrc} 2x,
              ${jpg3xSrc} 3x
            `}
          />
          <Image alt={`${alt}. Click for more information.`} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  white-space: nowrap;
  text-overflow: ellipsis;
  /* Allows for padding from li's to avoid overflow clipping */
  padding: 4px 0;
  overflow: hidden;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  margin-right: 8px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default PhotoGridItem;
