import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

const Error = () => {
  return (
    <Modal isCentered={true} size={'sm'} isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent m={5}>
        <ModalHeader>Ошибка</ModalHeader>
        <ModalBody>
          Произошла ошибка. <br />
          Повторите попытку позже.
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'center'}>
          {/* <Button>
                        Закрыть
                    </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Error;
