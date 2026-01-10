import { useMemo, useState } from 'react';

import { CreateEntityButton } from '@/features/entity/components/buttons/CreateEntityButton';
import { EntityImage } from '@/features/entity/components/entity-image';
import { useLocales } from '@/hooks/useLocales';
import type { LoadMoreParams } from '@gatewatcher/skin';
import {
  Card,
  Input,
  List,
  RouteContainer,
  SearchBar,
  Stack,
  Text,
  Title,
  usePagination,
} from '@gatewatcher/skin';
import type { Entity } from '@opfr/definitions';
import { getEntityName } from '@opfr/entities';

export const EntityRoute = () => {
  const [search, setSearch] = useState('');
  const [pageParams, setParams] = useState<LoadMoreParams>();
  const [columns, setColumns] = useState(5);

  const handleChange = (newValue: string) => {
    setSearch(newValue);
  };

  const filteredEntities = useMemo(
    () =>
      ([] as Entity[]).filter(entity => getEntityName(entity).includes(search)),
    [search],
  );

  const slidedEntities = usePagination(filteredEntities, pageParams);

  const { t } = useLocales('entity', { keyPrefix: 'main' });

  return (
    <RouteContainer>
      <RouteContainer.Header title={<Title as="h3">{t('title')}</Title>} />
      <RouteContainer.Body>
        <Stack direction="column" gap={8}>
          <Stack gap={4} justifyContent="flex-end">
            <Input.Number
              label={t('nbColumns')}
              labelDirection="row"
              max={6}
              min={1}
              onChange={event => setColumns(Number(event.target.value))}
              value={columns}
            />
            <SearchBar onChange={handleChange} value={search} />
            <CreateEntityButton />
          </Stack>
          <List
            columns={columns}
            data={slidedEntities}
            gap={8}
            initialPerPage={10}
            onParamsChange={setParams}
            totalItemsCount={filteredEntities.length}
            withEqualWidthColumns
          >
            {entity => (
              <List.Item key={entity.entityId}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      <Text whiteSpace="nowrap" overflowHidden>
                        {getEntityName(entity)}
                      </Text>
                    </Card.Title>
                    <Card.ButtonActions
                      actions={
                        <Card.DropdownActionsContent>
                          <Card.DropdownActionsButton>
                            caca
                          </Card.DropdownActionsButton>
                        </Card.DropdownActionsContent>
                      }
                    />
                  </Card.Header>
                  <Card.Body>
                    <EntityImage
                      category={entity.category}
                      imageId={entity.image}
                    />
                  </Card.Body>
                </Card>
              </List.Item>
            )}
          </List>
        </Stack>
      </RouteContainer.Body>
    </RouteContainer>
  );
};
