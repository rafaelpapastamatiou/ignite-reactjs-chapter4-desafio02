import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="auto"
        maxW={900}
        maxH={600}
        bgColor="transparent"
        alignItems="strech"
      >
        <ModalBody p="0">
          <Image src={imgUrl} />
        </ModalBody>
        <ModalFooter
          justifyContent="flex-start"
          bgColor="pGray.800"
          borderBottomLeftRadius="6"
          borderBottomRightRadius="6"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
