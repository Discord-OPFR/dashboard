import { classNames } from '@gatewatcher/bistoury/utils-dom';
import { Card } from '@gatewatcher/skin';
import type { ReactNode } from 'react';

import type { RaidNode } from '@/modules/raid/domain/raid.models';

import styles from '../styles.module.scss';

type RaidNodeTemplateProps = {
  node: RaidNode;
  children: ReactNode;
};

export const BaseRaidNode = ({ node, children }: RaidNodeTemplateProps) => {
  return (
    <Card
      className={classNames(styles[`FlowNode${node.type}`], styles.FlowNode)}
    >
      <Card.Header>
        <Card.Title as="h4">{node.id}</Card.Title>
        <Card.ButtonActions
          actions={
            <Card.DropdownActionsContent>
              <Card.DropdownActionsButton>a</Card.DropdownActionsButton>
              <Card.DropdownActionsButton>a</Card.DropdownActionsButton>
            </Card.DropdownActionsContent>
          }
        />
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
