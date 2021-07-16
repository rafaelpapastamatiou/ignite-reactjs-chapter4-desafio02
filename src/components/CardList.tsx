import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState<string | undefined>();

  function handleToggleViewImage(url?: string): void {
    if (url) {
      setCurrentImageUrl(url);
      onOpen();
    } else {
      setCurrentImageUrl(undefined);
      onClose();
    }
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(card => (
          <Card data={card} viewImage={url => handleToggleViewImage(url)} />
        ))}
      </SimpleGrid>

      {currentImageUrl && (
        <ModalViewImage
          imgUrl={currentImageUrl}
          isOpen={isOpen}
          onClose={handleToggleViewImage}
        />
      )}
    </>
  );
}
