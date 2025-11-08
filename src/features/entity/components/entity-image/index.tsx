import { useEffect, useState } from 'react';

import type { StackProps } from '@gatewatcher/skin';
import { CircularLoader } from '@gatewatcher/skin';
import { Stack } from '@gatewatcher/skin';
import type { EntityCategory, EntityImageId } from '@opfr/items';

import styles from './styles.module.scss';

type EntityImageProps = Pick<StackProps, 'margin' | 'padding'> & {
  imageId: EntityImageId;
  category: EntityCategory;
};

export const EntityImage = ({
  imageId,
  category,
  ...props
}: EntityImageProps) => {
  const [src, setSrc] = useState<string>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import(
      `@opfr/items/assets/${category === 'equipment' ? 'equipments' : 'items'}/${imageId}.webp`
    )
      .then(module => {
        setSrc(module.default);
        setLoaded(true);
      })
      .catch(() => setSrc(undefined));
  }, [imageId, category]);

  if (!src) {
    return null;
  }

  return (
    <Stack {...props} alignItems="center" justifyContent="center">
      {!src || !loaded ? (
        <CircularLoader size="xLarge" />
      ) : (
        <img
          alt={imageId}
          className={styles.EntityImage}
          loading="lazy"
          src={src}
        />
      )}
    </Stack>
  );
};
