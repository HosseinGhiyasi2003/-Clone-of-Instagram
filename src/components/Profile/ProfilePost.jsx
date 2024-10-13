import React from "react";
import postImg from "../../../public/post.jpg";
import {
  Avatar,
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { MdDelete } from "react-icons/md";

const ProfilePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer hover:opacity-80 duration-100"
        onClick={onOpen}
      >
        <img src={postImg} className="rounded-md" alt="" />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={postImg} />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar
                      src={postImg}
                      size={"sm"}
                      name="As a programmer"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      asprogrammer_
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
