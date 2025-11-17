import { authSelectors } from '@/modules/auth/application/auth.selectors';
import { useAppSelector } from '@/store/reduxStore';
import { Stack, Text } from '@gatewatcher/skin';

import styles from './styles.module.scss';

export const ProfileAvatar = () => {
  const user = useAppSelector(authSelectors.me);

  if (!user) {
    return null;
  }

  return (
    <Stack alignItems="center" gap={3}>
      <Text weight="medium">{user.username}</Text>
      <img
        alt=""
        className={styles.AvatarImage}
        src={`https://cdn.discordapp.com/avatars/${user.userId}/${user.avatar}`}
      />
    </Stack>
  );
};
