"use client";

/* eslint-disable react/jsx-sort-props */
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Eye } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@nextui-org/react";

// type TProps = {
//   post: any;
// };

type TClaimant = {
  name: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
};

type TPost = {
  claimant: TClaimant;
};

type TProps = {
  post: TPost;
};

const ClaimModal = ({ post }: { post: any }) => {
  const { claimant } = post || {};

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log(post);

  return (
    <>
      <Button onPress={onOpen} aria-label="View Claimant Info">
        <Eye className="cursor-pointer" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1>Claimant User</h1>
                <Divider />
              </ModalHeader>
              <ModalBody>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <div className="flex items-center space-x-3 justify-between mb-2">
                      <h1>Name: {claimant?.name}</h1>
                      <p>Email: {claimant?.email}</p>
                    </div>
                    <p className="mb-2">Phone: {claimant?.mobileNumber}</p>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      width={400}
                      height={300}
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={claimant?.profilePhoto || "/default-profile.jpg"}
                    />
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClaimModal;
